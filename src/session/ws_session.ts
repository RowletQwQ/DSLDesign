import { randomUUID } from "crypto";
import { SessionStage } from "./session_stage.js";
import { SessionEvent } from "../event/session_event.js";
import { Instance } from "../runtime/instance.js";
import WebSocket from "ws";
import { InterruptEvent } from "../event/interrupt_event.js";
import { assert } from "console";

enum WsMessageType {
    NormalMsg,
    ErrorMsg,
    Menu
}
interface WsMessage{
    type: WsMessageType,
    content: string,
    menu?: string[]
}

/**
 * Represents a WebSocket session.
 */
export class WsSession {
    private session_stage_: SessionStage;
    private session_id_: string;
    private bot_name_: string;
    private ws_: WebSocket.Server;
    private instance_: Instance | null = null;
    private message_queue_: string[] = [];

    /**
     * Creates a new instance of WsSession.
     * @param name - The name of the session.
     * @param script - The script associated with the session.
     */
    constructor(name: string, script: string) {
        // Generate a session ID
        this.session_id_ = randomUUID();
        this.session_stage_ = new SessionStage();
        this.bot_name_ = name;
        let session_event = new SessionEvent(name, this.session_id_, script);
        this.session_stage_.handle_event(session_event);
        // Get the instance
        this.instance_ = session_event.get_instance();
        if (this.instance_ == null) {
            throw new Error("instance is null");
        }
        // Create a websocket
        this.ws_ = new WebSocket.Server({ port: 0 });
        // Register the event handler
        this.ws_.on("connection", this.onWsConnection);
        this.ws_.on("message", this.onWsMessage);
        this.ws_.on("close", this.onWsClose);
        this.ws_.on("error", this.onWsClose);
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
        return `ws://localhost:${this.ws_.options.port}`;
    }

    /**
     * Handles a WebSocket connection.
     * @param ws - The WebSocket object representing the connection.
     */
    onWsConnection(ws: WebSocket) {
        // Initialize the instance
        if (this.instance_ == null) {
            throw new Error("instance is null");
        }
        this.instance_.start();
        this.instance_.run(this.onInterruptEvent)
    }

    /**
     * Handles WebSocket messages.
     * @param message - The WebSocket message.
     * @throws Error if the instance is null or not running.
     */
    onWsMessage(message: WebSocket.Data) {
        if (this.instance_ == null) {
            throw new Error("instance is null");
        }
        if (!this.instance_.is_running()) {
            throw new Error("instance is not running");
        }
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

    /**
     * Handles the interrupt event from the instance.
     * @param interrupt_event - The interrupt event to handle.
     * @param timer - The timer value in seconds.
     * @returns A promise that resolves when the interrupt event is handled.
     */
    onInterruptEvent(interrupt_event: InterruptEvent, timer: number): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            if (interrupt_event.is_output()) {
                // Send the output to the client
                const ws_message: WsMessage = {
                    type: WsMessageType.NormalMsg,
                    content: interrupt_event.get_description()
                }
                this.ws_.clients.forEach((client) => {
                    client.send(JSON.stringify(ws_message));
                });
            } else if (interrupt_event.is_error()) {
                const ws_message: WsMessage = {
                    type: WsMessageType.ErrorMsg,
                    content: interrupt_event.get_description()
                }
                this.ws_.clients.forEach((client) => {
                    client.send(JSON.stringify(ws_message));
                });
                reject(new Error(interrupt_event.get_description()));
            } else if (interrupt_event.is_exit()) {
                this.ws_.close();
            } else if (interrupt_event.is_show_menu()) {
                // Show the menu
                const ws_message: WsMessage = {
                    type: WsMessageType.Menu,
                    content: interrupt_event.get_description(),
                    menu: interrupt_event.get_menu()
                }
                this.ws_.clients.forEach((client) => {
                    client.send(JSON.stringify(ws_message));
                });
                // Wait for the input, No timer for menu
                if (this.message_queue_.length > 0) {
                    const message = this.message_queue_.shift();
                    if (message == undefined || this.instance_ == null) {
                        throw new Error("message is undefined or instance is null");
                    }
                    this.instance_.push_input(message);
                    resolve();
                } else {
                    // Wait for the input
                    const checkQueue = () => {
                        if (this.message_queue_.length > 0) {
                            const message = this.message_queue_.shift();
                            if (message == undefined || this.instance_ == null) {
                                throw new Error("message is undefined or instance is null");
                            }
                            this.instance_.push_input(message);
                            resolve();
                        } else {
                            setTimeout(checkQueue, 100);
                        }
                    }
                }
            } else if (interrupt_event.is_input()) {
                // Wait for the input
                if (timer) {
                    const timeoutId = setTimeout(() => {
                        resolve();
                    }, timer * 1000);
                    if (this.message_queue_.length > 0) {
                        const message = this.message_queue_.shift();
                        if (message == undefined || this.instance_ == null) {
                            throw new Error("message is undefined or instance is null");
                        }
                        this.instance_.push_input(message);
                        clearTimeout(timeoutId);
                        resolve();
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
                                resolve();
                            } else {
                                setTimeout(checkQueue, 100);
                            }
                        }
                    }
                } else {
                    if (this.message_queue_.length > 0) {
                        const message = this.message_queue_.shift();
                        if (message == undefined || this.instance_ == null) {
                            throw new Error("message is undefined or instance is null");
                        }
                        this.instance_.push_input(message);
                        resolve();
                    } else {
                        // Wait for the input
                        const checkQueue = () => {
                            if (this.message_queue_.length > 0) {
                                const message = this.message_queue_.shift();
                                if (message == undefined || this.instance_ == null) {
                                    throw new Error("message is undefined or instance is null");
                                }
                                this.instance_.push_input(message);
                                resolve();
                            } else {
                                setTimeout(checkQueue, 100);
                            }
                        }
                    }
                }
            }
        });
    }
}