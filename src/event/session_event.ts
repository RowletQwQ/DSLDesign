import { Executor } from "../executor/executor.ts";

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
    private executor_ : Executor | null = null;
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
     * 设置脚本解析后生成的执行器
     * @param executor 执行器 
     */
    set_executor(executor: Executor) {
        this.executor_ = executor;
    }

    /**
     * 事件完毕后，需要获取脚本的执行器
     * @returns 返回会话的执行器 
     */
    get_executor(): Executor | null {
        return this.executor_;
    }
}