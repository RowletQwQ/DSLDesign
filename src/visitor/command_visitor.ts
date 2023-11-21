import { AbstractParseTreeVisitor } from "antlr4ng";
import { Command_sequncesContext, Command_stmtContext } from "../parser/cslParser.ts";
import { cslVisitor } from "../parser/cslVisitor.ts";
import { CommandStmt } from "../stmt/command_stmt.ts";

export class CommandVisitor extends cslVisitor<CommandStmt [] | CommandStmt> {

    override visitCommand_sequnces = (ctx: Command_sequncesContext): CommandStmt [] =>{
        // 在这里实现访问 Command_sequnces 的逻辑
        let command_stmts = ctx.command_stmt();
        let seq_stmts = ctx.command_sequnces();
        let command_seq = new Array<CommandStmt>();
        if (seq_stmts != undefined) {
            command_seq = this.visitCommand_sequnces(seq_stmts);
        }
        let command = this.visitCommand_stmt(command_stmts);
        command_seq.push(command);
        return command_seq;
    }
    
    override visitCommand_stmt = (ctx: Command_stmtContext): CommandStmt =>{
        let command = this.visitChildren(ctx);
        if (command instanceof Array || command == null) {
            throw new Error("Command Parse error");
        }
        return command;
    }

    // 以下是对应语法

}