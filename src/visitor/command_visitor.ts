import { Command_sequncesContext, Command_stmtContext } from "../parser/cslParser";
import { cslVisitor } from "../parser/cslVisitor";
import { CommandStmt } from "../stmt/command_stmt";

export class CommandVisitor implements cslVisitor<CommandStmt []> {
    private instance_: CommandStmt [];
    // TODO 等待实现
    constructor(ctx: Command_sequncesContext) {
        this.instance_ = this.visitCommand_sequnces(ctx);
    }

    get_instance(): CommandStmt [] {
        return this.instance_;
    }

    visitCommand_sequnces(ctx: Command_sequncesContext): CommandStmt [] {
        // 在这里实现访问 Command_sequnces 的逻辑
        let command_stmts = ctx.command_stmt();
        let command_seq: CommandStmt [] = [];
        for (let command_stmt of command_stmts) {
            let command = new CommandVisitor(command_stmt);
            command_seq.push(command.get_instance());
        }
        return command_seq;
    }
}