
import { Context } from "../context/context.js";
import { InterruptEvent, InterruptReason } from "../event/interrupt_event.js";
import { ScriptInputEvent } from "../event/script_input_event.js";
import { Executor } from "../executor/executor.js";


/**
 * @brief instance.js 实例
 * 表示一个脚本文件的运行实例
 * 一个脚本文件可能会被多个用户同时访问

 */

export class Instance {
    private main_executor_: Executor;
    private input_buffer_: string[] = [];
    private instance_id_: string;
    private is_running_: boolean = false;
    constructor(name: string,main_executor: Executor) {
        this.main_executor_ = main_executor;
        this.instance_id_ = name;
    }

    start(): void {
        this.main_executor_.open(new Context());
        this.is_running_ = true;
    }

    /**
     * 执行脚本
     * @param callback 回调函数，用于处理中断事件 
     */
    async run(callback: (interrupt_event: InterruptEvent, timer: number) => Promise<void>): Promise<void> {
        if (!this.is_running_) {
            throw new Error("instance is not running");
        }
        // 先检查输入缓冲区
        let input = this.input_buffer_.shift();
        let result = this.main_executor_.next(new ScriptInputEvent(input));

        while (!result.is_exit() && !result.is_finished()) {
            // 在此处不应该出现break和continue
            if (result.is_break() || result.is_continue()) {
                throw new Error("break and continue should only be used in loop");
            }

            if (result.is_output()) {
                // 是输出事件，发出中断请求
                callback(new InterruptEvent(InterruptReason.OUTPUT, result.get_result()), 0);
            }

            if (result.is_input()) {
                // 是输入事件，先查询输入缓冲区
                if (input == undefined) {
                    // 没有输入，调用回调函数发出中断事件
                    await callback(new InterruptEvent(InterruptReason.INPUT, ""), result.get_timer());
                    input = this.input_buffer_.shift();
                    if (input == undefined) {
                        // 超时未输入
                        result = this.main_executor_.next(new ScriptInputEvent(undefined, true));
                        continue;
                    }
                }
                // 有输入，直接执行
                result = this.main_executor_.next(new ScriptInputEvent(input));
                // 随后重新获取输入
                input = this.input_buffer_.shift();
            } else {
                // 是其他事件，直接执行
                result = this.main_executor_.next(new ScriptInputEvent(undefined));
            }
        }

        // 执行完毕
        this.main_executor_.close();
        callback(new InterruptEvent(InterruptReason.EXIT, result.get_result()), 0);
        
    }

    push_input(input: string): void {
        this.input_buffer_.push(input);
    }
    
    get_instance_id(): string {
        return this.instance_id_;
    }
}