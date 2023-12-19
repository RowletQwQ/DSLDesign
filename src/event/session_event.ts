import { Executor } from "../executor/executor.js";
import { Instance } from "../runtime/instance.js";

/**
 * @brief 用于承载一个新的会话
 * @param bot_name 机器人名称
 * @param session_id 会话ID
 * @param script 机器人脚本
 * @param instance 机器人实例
 */
/**
 * Represents a session event.
 */
export class SessionEvent {
  private bot_name_: string;
  private session_id_: string;
  private script_: string;
  private instance_: Instance | null = null;

  /**
   * Creates a new session event object.
   * @param bot_name The name of the bot.
   * @param session_id The ID of the session.
   * @param script The script content.
   */
  constructor(bot_name: string, session_id: string, script: string) {
    this.bot_name_ = bot_name;
    this.session_id_ = session_id;
    this.script_ = script;
  }

  /**
   * Gets the name of the bot.
   * @returns The name of the bot.
   */
  get_bot_name(): string {
    return this.bot_name_;
  }

  /**
   * Gets the ID of the session.
   * @returns The ID of the session.
   */
  get_session_id(): string {
    return this.session_id_;
  }

  /**
   * Gets the script content.
   * @returns The script content.
   */
  get_script(): string {
    return this.script_;
  }

  /**
   * Gets the instance generated from the script.
   * @returns The instance generated from the script.
   */
  get_instance(): Instance | null {
    return this.instance_;
  }

  /**
   * Sets the instance generated from the script.
   * @param instance The instance generated from the script.
   */
  set_instance(instance: Instance): void {
    this.instance_ = instance;
  }
}
