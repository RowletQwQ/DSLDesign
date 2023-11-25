import { Executor } from "../executor/executor.js";
import { Instance } from "../runtime/instance.js";

/**
 * @brief 用于承载一个新的会话
 * @param bot_name 机器人名称
 * @param session_id 会话ID
 * @param script 机器人脚本
 */
export class SessionEvent {
    private bot_name_: string;
    private session_id_: string;
    private script_ : string;
    private instance_: Instance | null = null;
    constructor(bot_name: string, session_id: string, script: string) {
        this.bot_name_ = bot_name;
        this.session_id_ = session_id;
        this.script_ = script;
    }

    get_bot_name(): string {
        return this.bot_name_;
    }

    get_session_id(): string {
        return this.session_id_;
    }

    get_script(): string {
        return this.script_;
    }

    /**
     * 获取实例
     * @returns 返回根据脚本生成好的实例 
     */
    get_instance(): Instance | null {
        return this.instance_;
    }

    /**
     * 设置实例
     * @param instance 根据脚本生成好的实例 
     */
    set_instance(instance: Instance): void {
        this.instance_ = instance;
    }
}