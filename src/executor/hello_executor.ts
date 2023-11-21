import { Context } from "../context/context.ts";
import { ResultEvent } from "../event/result_event.ts";
import { HelloStmt } from "../stmt/hello_stmt.ts";
import { Executor, ExecutorType } from "./executor.ts";

export class HelloExecutor implements Executor {
    constructor(stmt: HelloStmt) {

    }
    open(context: Context): void {
        throw new Error("Method not implemented.");
    }

    next(): ResultEvent {
        throw new Error("Method not implemented.");
    }

    close(): void {
        throw new Error("Method not implemented.");
    }

    get_executor_type(): ExecutorType {
        return ExecutorType.HELLO;
    }
}