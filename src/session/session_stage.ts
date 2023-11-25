import { CharStreams } from "antlr4ng";
import { SessionEvent } from "../event/session_event.ts";
import { cslLexer } from "../parser/cslLexer.ts";
import { ParserStage } from "../parser/parse_stage.ts";
import { Instance } from "../runtime/instance.ts";
import { ScriptExecutor } from "../executor/script_executor.ts";

export class SessionStage {
    private parser_stage_: ParserStage;
    constructor() {
        this.parser_stage_ = new ParserStage();
    }
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
        }
        

    }

}