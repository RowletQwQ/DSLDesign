import { Topic_stmtContext } from "../parser/cslParser.js";
import { cslVisitor } from "../parser/cslVisitor.js";
import { TopicStmt } from "../stmt/topic_stmt.js";
import { CommandVisitor } from "./command_visitor.js";

/**
 * Represents a visitor for the Topic_stmt rule in the DSLDesign language.
 * This visitor is responsible for visiting and processing the Topic_stmt rule.
 */
export class TopicVisitor extends cslVisitor<TopicStmt> {
  private command_visitor_: CommandVisitor;

  constructor() {
    super();
    this.command_visitor_ = new CommandVisitor();
  }

  /**
   * Visits the Topic_stmt rule and returns a TopicStmt object.
   * @param ctx The context object representing the Topic_stmt rule.
   * @returns A TopicStmt object representing the visited Topic_stmt rule.
   * @throws An error if the Topic_stmt rule does not have a command.
   */
  override visitTopic_stmt = (ctx: Topic_stmtContext): TopicStmt => {
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
  };
}
