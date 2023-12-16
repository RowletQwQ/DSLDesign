import { Hello_stmtContext } from "../parser/cslParser.js";
import { cslVisitor } from "../parser/cslVisitor.js";
import { HelloStmt } from "../stmt/hello_stmt.js";
import { CommandVisitor } from "./command_visitor.js";

/**
 * Represents a visitor for the HelloStmt class.
 */
export class HelloVisitor extends cslVisitor<HelloStmt> {
    private command_visitor_: CommandVisitor;

    /**
     * Creates an instance of HelloVisitor.
     */
    constructor() {
        super();
        this.command_visitor_ = new CommandVisitor();
    }

    /**
     * Visits the Hello_stmt context and returns a HelloStmt object.
     * @param ctx The Hello_stmtContext object.
     * @returns A HelloStmt object.
     */
    override visitHello_stmt = (ctx: Hello_stmtContext): HelloStmt => {
        let command_seq = this.command_visitor_.visitCommand_sequnces(ctx.command_sequnces());
        return new HelloStmt(command_seq);
    }
}