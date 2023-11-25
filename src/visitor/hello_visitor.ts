import { Hello_stmtContext } from "../parser/cslParser.js";
import { cslVisitor } from "../parser/cslVisitor.js";
import { HelloStmt } from "../stmt/hello_stmt.js";
import { CommandVisitor } from "./command_visitor.js";

export class HelloVisitor extends cslVisitor<HelloStmt> {
    private command_visitor_: CommandVisitor;
    constructor() {
        super();
        this.command_visitor_ = new CommandVisitor();
    }

    override visitHello_stmt = (ctx: Hello_stmtContext):HelloStmt => {
        let command_seq = this.command_visitor_.visitCommand_sequnces(ctx.command_sequnces());
        return new HelloStmt(command_seq);
    }

}