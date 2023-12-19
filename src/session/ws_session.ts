import { randomUUID } from "crypto";
import { SessionStage } from "./session_stage.js";
import { SessionEvent } from "../event/session_event.js";
import { Instance } from "../runtime/instance.js";
import { WebSocketServer, WebSocket } from "ws";
import { InterruptEvent } from "../event/interrupt_event.js";
import { assert } from "console";

enum WsMessageType {
  NormalMsg,
  ErrorMsg,
  Menu,
}
interface WsMessage {
  type: WsMessageType;
  content: string;
  menu?: string[];
}

/**
 * Represents a WebSocket session.
 */
export class WsSession {
  private session_stage_: SessionStage;
  private session_id_: string;
  private bot_name_: string;
  private ws_: WebSocketServer;
  private ws_conn: WebSocket;
  private instance_: Instance | null = null;
  private message_queue_: string[] = [];

  /**
   * Creates a new instance of WsSession.
   * @param name - The name of the session.
   * @param script - The script associated with the session.
   * @param port - The port number of the WebSocket server.
   */
  constructor(name: string, script: string, port: number) {
    // Generate a session ID
    this.session_id_ = randomUUID();
    this.session_stage_ = new SessionStage();
    this.bot_name_ = name;
    let session_event = new SessionEvent(name, this.session_id_, script);
    this.session_stage_.handle_event(session_event);
    // Get the instance
    this.instance_ = session_event.get_instance();
    // Create a websocket
    this.ws_ = new WebSocketServer({ port: port });
    // Register the event handler
    this.ws_.on("connection", (ws) => {
      ws.onmessage = (message) => {
        this.onWsMessage(message.data.toString());
      };
      ws.onclose = () => {
        this.onWsClose();
      };
      ws.onerror = (error) => {
        console.log(error);
        this.onWsClose();
      };
      if (this.instance_ == null) {
        console.log("实例不存在，请检查脚本是否正确");
        ws.close();
        return;
      }
      this.ws_conn = ws;
      this.onWsConnection.bind(this)();
    });
    if (this.ws_conn != undefined) {
      console.log(`WebSocket server is listening on ${this.get_ws_addr()}`);
    }
  }

  is_instance_exist(): boolean {
    return this.instance_ != null;
  }

  /**
   * Gets the session ID.
   * @returns The session ID.
   */
  get_session_id(): string {
    return this.session_id_;
  }

  /**
   * Gets the name of the bot.
   * @returns The name of the bot.
   */
  get_bot_name(): string {
    return this.bot_name_;
  }

  /**
   * Gets the WebSocket server address.
   * @returns The WebSocket server address.
   */
  get_ws_addr(): string {
    if (this.ws_.options.port == undefined) {
      throw new Error("port is undefined");
    }
    if (this.instance_ == null) {
      return "";
    }
    return `ws://localhost:${this.ws_.options.port}`;
  }

  /**
   * Handles a WebSocket connection.
   */
  onWsConnection() {
    // Initialize the instance
    if (this.instance_ == null) {
      throw new Error("instance is null");
    }
    this.instance_.start();
    this.instance_.run(this.onInterruptEvent.bind(this));
  }

  /**
   * Handles WebSocket messages.
   * @param message - The WebSocket message.
   * @throws Error if the instance is null or not running.
   */
  onWsMessage(message: string) {
    if (this.instance_ == null) {
      throw new Error("instance is null");
    }
    if (!this.instance_.is_running()) {
      throw new Error("instance is not running");
    }
    console.log(`Received message: ${message}`);
    this.message_queue_.push(message.toString());
  }

  /**
   * Closes the WebSocket connection and performs additional cleanup if necessary.
   */
  onWsClose() {
    this.ws_.close();
    if (this.instance_ != null) {
      this.instance_.close();
    }
  }

  sendMsgToClient(message: string) {
    const ws_message: WsMessage = {
      type: WsMessageType.NormalMsg,
      content: message,
    };
    this.ws_conn.send(JSON.stringify(ws_message));
  }

  sendErrorMsgToClient(message: string) {
    const ws_message: WsMessage = {
      type: WsMessageType.ErrorMsg,
      content: message,
    };
    this.ws_conn.send(JSON.stringify(ws_message));
  }

  sendMenuToClient(message: string, menu: string[]) {
    const ws_message: WsMessage = {
      type: WsMessageType.Menu,
      content: message,
      menu: menu,
    };
    this.ws_conn.send(JSON.stringify(ws_message));
  }

  waitInput(timer: number) {
    return new Promise<string>((resolve) => {
      if (timer > 0) {
        const timeoutId = setTimeout(() => {
          resolve("");
        }, timer * 1000);
        if (this.message_queue_.length > 0) {
          const message = this.message_queue_.shift();
          if (message == undefined || this.instance_ == null) {
            throw new Error("message is undefined or instance is null");
          }
          this.instance_.push_input(message);
          clearTimeout(timeoutId);
          resolve(message);
        } else {
          // Wait for the input
          const checkQueue = () => {
            if (this.message_queue_.length > 0) {
              const message = this.message_queue_.shift();
              if (message == undefined || this.instance_ == null) {
                throw new Error("message is undefined or instance is null");
              }
              this.instance_.push_input(message);
              clearTimeout(timeoutId);
              resolve(message);
            } else {
              setTimeout(checkQueue, 100);
            }
          };
        }
      } else {
        if (this.message_queue_.length > 0) {
          const message = this.message_queue_.shift();
          if (message == undefined || this.instance_ == null) {
            throw new Error("message is undefined or instance is null");
          }
          this.instance_.push_input(message);
          resolve(message);
        } else {
          // Wait for the input
          const checkQueue = () => {
            if (this.message_queue_.length > 0) {
              const message = this.message_queue_.shift();
              if (message == undefined || this.instance_ == null) {
                throw new Error("message is undefined or instance is null");
              }
              this.instance_.push_input(message);
              resolve(message);
            } else {
              setTimeout(checkQueue, 100);
            }
          };
          checkQueue();
        }
      }
    });
  }

  /**
   * Handles the interrupt event from the instance.
   * @param interrupt_event - The interrupt event to handle.
   * @param timer - The timer value in seconds.
   * @returns A promise that resolves when the interrupt event is handled.
   */
  async onInterruptEvent(
    interrupt_event: InterruptEvent,
    timer: number
  ): Promise<void> {
    try {
      if (interrupt_event.is_output()) {
        this.sendMsgToClient(interrupt_event.get_description());
      } else if (interrupt_event.is_error()) {
        this.sendErrorMsgToClient(interrupt_event.get_description());
        throw new Error(interrupt_event.get_description());
      } else if (interrupt_event.is_exit()) {
        this.ws_conn.close();
      } else if (interrupt_event.is_show_menu()) {
        this.sendMenuToClient(
          interrupt_event.get_description(),
          interrupt_event.get_menu()
        );
        await this.waitInput(0);
      } else if (interrupt_event.is_input()) {
        await this.waitInput(timer);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
