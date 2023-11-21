import { Context } from "../context/context.ts";
import { ResultEvent } from "../event/result_event.ts";
import { TopicStmt } from "../stmt/topic_stmt.ts";
import { Executor, ExecutorType } from "./executor.ts";

export class TopicExecutor implements Executor {
    constructor(stmt: TopicStmt) {
            
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
        return ExecutorType.TOPIC;
    }
}