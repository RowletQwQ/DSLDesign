import { Topic_stmtContext } from "../parser/cslParser.ts";
import { cslVisitor } from "../parser/cslVisitor.ts";
import { TopicStmt } from "../stmt/topic_stmt.ts";
import { CommandVisitor } from "./command_visitor.ts";

export class TopicVisitor extends cslVisitor<TopicStmt> {
    private command_visitor_: CommandVisitor;

    constructor() {
        super();
        this.command_visitor_ = new CommandVisitor();
    }
    
    override visitTopic_stmt = (ctx: Topic_stmtContext): TopicStmt =>{
        // 在这里实现访问 Topic_stmt 的逻辑
        let name = ctx.ID().getText();
        let command_seq_stmt = ctx.command_sequnces();
        if (command_seq_stmt == undefined) {
            throw new Error(`Topic ${name} has no command`);
        }

        let command_seq = this.command_visitor_.visit(command_seq_stmt);
        if (command_seq == null) {
            throw new Error(`Topic ${name} has no command`);
        }
        let topic_stmt = new TopicStmt(name, command_seq);
        return topic_stmt;
    }
}