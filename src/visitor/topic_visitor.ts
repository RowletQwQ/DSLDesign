import { Topic_stmtContext } from "../parser/cslParser";
import { cslVisitor } from "../parser/cslVisitor";
import { TopicStmt } from "../stmt/topic_stmt";
import { CommandVisitor } from "./command_visitor";

export class TopicVisitor implements cslVisitor<TopicStmt> {
    private instance_: TopicStmt;
    private command_visitor_: CommandVisitor;
    constructor(ctx: Topic_stmtContext) {
        this.instance_ = this.visitTopic_stmt(ctx);
    }

    get_instance(): TopicStmt {
        return this.instance_;
    }
    
    visitTopic_stmt(ctx: Topic_stmtContext): TopicStmt {
        // 在这里实现访问 Topic_stmt 的逻辑
        let name = ctx.ID().getText();
        let command_seq_stmt = ctx.command_sequnces();
        if (command_seq_stmt == undefined) {
            throw new Error(`Topic ${name} has no command`);
        }
        this.command_visitor_ = new CommandVisitor(command_seq_stmt);

        let command_seq = this.command_visitor_.get_instance();
        return new TopicStmt(name, command_seq);
    }
}