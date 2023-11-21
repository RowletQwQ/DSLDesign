import { Context } from "../context/context.ts";
import { ResultEvent } from "../event/result_event.ts";

export enum ExecutorType {
    SCRIPT,         //< 脚本执行器, 根执行器
    HELLO,          //< 问候执行器
    CHATBOX,        //< 初始聊天执行器
    TOPIC,          //< 话题执行器
    SAY,            //< say命令执行器
    GOTO,           //< goto命令执行器
    MENU,           //< menu命令执行器
    FETCH,          //< fetch命令执行器
    POST,           //< post命令执行器
    SET,            //< set命令执行器
    INPUT,          //< input命令执行器
    IF,             //< if命令执行器
    LOOP,           //< loop命令执行器
    ASSERT,         //< assert命令执行器
    WHEN,           //< when命令执行器
    WHEN_SILENCE,   //< when silence命令执行器
    MATCH,          //< match命令执行器
    CASE,           //< case命令执行器
    CONTINUE,       //< continue命令执行器
    BREAK,          //< break命令执行器
    EXIT,           //< exit命令执行器
}
/* 
* @brief: executor.ts 执行器
* 用于执行一条指令
*/
export interface Executor {
    /**
     * 打开命令
     * @param context 命令执行对应的上下文 
     */
    open(context: Context): void;

    /**
     * 执行下一条命令
     * @returns 返回命令执行后的结果 
     */
    next(): ResultEvent;

    /**
     * 关闭命令
     * 会销毁命令对应的资源
     */
    close(): void;

    /**
     * 获取执行器类型
     * @returns 返回执行器类型 
     */
    get_executor_type(): ExecutorType;
}