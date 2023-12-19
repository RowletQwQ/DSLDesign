import { CharStreams } from "antlr4ng";
import { SessionEvent } from "../event/session_event.js";
import { cslLexer } from "../parser/cslLexer.js";
import { ParserStage } from "../parser/parse_stage.js";
import { Instance } from "../runtime/instance.js";
import { ScriptExecutor } from "../executor/script_executor.js";

/**
 * Represents a session stage.
 */
export class SessionStage {
    private parser_stage_: ParserStage;

    /**
     * Creates an instance of SessionStage.
     */
    constructor() {
        this.parser_stage_ = new ParserStage();
    }

    /**
     * Handles a session event.
     * @param session_event - The session event to handle.
     */
    handle_event(session_event: SessionEvent): void {
        let script = session_event.get_script();

        // 语法解析
        try {
            let script_stmt = this.parser_stage_.handle_script(script);
            if (script_stmt == null) {
                throw new Error("script_stmt is null");
            }
            // 生成执行器
            let main_executor = new ScriptExecutor(script_stmt);
            // 生成实例
            let instance = new Instance(session_event.get_session_id(), main_executor);
            session_event.set_instance(instance);
        } catch (error) {
            console.log(error);
            throw new Error("Failed to parse script:" + error.message);
        }
    }
}