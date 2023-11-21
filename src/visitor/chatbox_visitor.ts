import { Chatbox_stmtContext } from "../parser/cslParser.ts";
import { cslVisitor } from "../parser/cslVisitor.ts";
import { ChatBoxStmt } from "../stmt/chatbox_stmt.ts";
import { CaseStmt } from "../stmt/command/case_stmt.ts";
import { CommandVisitor } from "./command_visitor.ts";

export class ChatBoxVisitor extends cslVisitor<ChatBoxStmt> {
    private command_visitor_: CommandVisitor;
    constructor() {
        super();
        this.command_visitor_ = new CommandVisitor();
    }

    override visitChatbox_stmt = (ctx: Chatbox_stmtContext):ChatBoxStmt => {
        let default_branch = this.command_visitor_.visitDefault_branch(ctx.default_branch()) as CaseStmt;
        let case_list_stmt = ctx.case_list();
        if (case_list_stmt == null) {
            return new ChatBoxStmt([default_branch]);
        }
        let case_list = this.command_visitor_.visitCase_list(case_list_stmt) as CaseStmt[];
        return new ChatBoxStmt(case_list.concat(default_branch));   
    }
}