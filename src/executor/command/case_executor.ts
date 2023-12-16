import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { CaseStmt } from "../../stmt/command/case_stmt.js";
import { CommandExecutor } from "../command_executor.js";
import { Executor, ExecutorType } from "../executor.js";

/**
 * Represents a CaseExecutor that executes a sequence of commands in a case statement.
 */
export class CaseExecutor implements Executor {
    private children_: Executor[];
    private current_index_: number = 0;
    private local_context_: Context;

    /**
     * Creates a new instance of CaseExecutor.
     * @param stmt The CaseStmt object containing the commands to be executed.
     * @throws Error if CaseStmt does not have at least one command.
     */
    constructor(stmt: CaseStmt){
        let command_seq = stmt.get_commands();
        this.children_ = [];
        for(let command of command_seq) {
            this.children_.push(new CommandExecutor(command));
        }
        if (command_seq.length == 0) {
            throw new Error("CaseStmt should have at least one command");
        }
    }

    /**
     * Gets the type of the executor.
     * @returns The ExecutorType.CASE.
     */
    get_executor_type(): ExecutorType {
        return ExecutorType.CASE;
    }

    /**
     * Opens the executor and initializes the local context.
     * @param context The parent context.
     */
    open(context: Context): void {
        this.current_index_ = 0;
        this.local_context_ = new Context();
        this.local_context_.set_upper_context(context);
        this.children_[this.current_index_].open(this.local_context_);
    }

    /**
     * Moves to the next command in the sequence and returns the result.
     * @param input The input event.
     * @returns The result event.
     */
    next(input: ScriptInputEvent): ResultEvent {
        let result = this.children_[this.current_index_].next(input);
        while (result.is_finished()) {
            let context = this.children_[this.current_index_].close();
            this.local_context_ = context;
            this.current_index_++;
            if (this.current_index_ >= this.children_.length) {
                return new ResultEvent(0,"",ResultType.END);
            }
            this.children_[this.current_index_].open(this.local_context_);
            result = this.children_[this.current_index_].next(input);
        }
        return result;
    }

    /**
     * Closes the executor and returns the upper context.
     * @returns The upper context.
     * @throws Error if CaseExecutor does not have an upper context.
     */
    close(): Context {
        let upper_context = this.local_context_.get_upper_context();
        if (upper_context == null) {
            throw new Error("CaseExecutor should have upper context");
        }
        return upper_context;
    }
}