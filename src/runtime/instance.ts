
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
    /**
     * Creates a new instance of the class.
     * @param name - The name of the instance.
     * @param main_executor - The main executor for the instance.
     */
    constructor(name: string,main_executor: Executor) {
        this.main_executor_ = main_executor;
        this.instance_id_ = name;
        this.is_running_ = false;
    }

    /**
     * Returns a boolean value indicating whether the instance is currently running.
     * @returns {boolean} True if the instance is running, false otherwise.
     */
    is_running(): boolean {
        return this.is_running_;
    }

    /**
     * Starts the execution of the program.
     */
    start(): void {
        this.main_executor_.open(new Context(new Map<string,any>()));
        this.is_running_ = true;
    }

    /**
     * Closes the instance.
     */
    close(): void {
        this.is_running_ = false;
    }

    /**
     * 执行脚本
     * @param callback 回调函数，用于处理中断事件 
     */
    /**
     * Runs the instance and executes the script.
     * 
     * @param callback - The callback function to handle interrupt events and timers.
     * @returns A promise that resolves when the execution is complete.
     * @throws {Error} If the instance is not running or if break/continue is used outside of a loop.
     */
    async run(callback: (interrupt_event: InterruptEvent, timer: number) => Promise<void>): Promise<void> {
        if (!this.is_running_) {
            throw new Error("instance is not running");
        }
        // 先检查输入缓冲区
        let input = this. input_buffer_.shift();
        let result = this.main_executor_.next(new ScriptInputEvent(input));

        while (!result.is_exit() && !result.is_finished() && this.is_running_) {
            // 在此处不应该出现break和continue
            if (result.is_break() || result.is_continue()) {
                throw new Error("break and continue should only be used in loop");
            }

            if (result.is_output()) {
                // 是输出事件，发出中断请求
                await callback(new InterruptEvent(InterruptReason.OUTPUT, result.get_result()), 0);
            }

            if (result.is_menu()) {
                // 需要在前端显示选项菜单
                let menuInterruptEvent = new InterruptEvent(InterruptReason.SHOW_MENU, result.get_result());
                menuInterruptEvent.set_menu(result.get_menu());
                await callback(menuInterruptEvent, 0);
                input = this.input_buffer_.shift();
                if (input == undefined) {
                    // 出bug了
                    throw new Error("menu input is undefined");
                }
                // 有输入，直接执行
                result = this.main_executor_.next(new ScriptInputEvent(input));
                input = this.input_buffer_.shift();
                continue;
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

    /**
     * Pushes an input string to the input buffer.
     * @param input The input string to be pushed.
     */
    push_input(input: string): void {
        this.input_buffer_.push(input);
    }
    
    /**
     * Gets the instance ID.
     * @returns The instance ID.
     */
    get_instance_id(): string {
        return this.instance_id_;
    }
}