import {
  ConstanceContext,
  Constance_listContext,
  Constance_stmtContext,
} from "../parser/cslParser.js";
import { cslVisitor } from "../parser/cslVisitor.js";
import { ConstanceStmt } from "../stmt/constance_stmt.js";
import { Expression } from "../expr/expression.js";
import { ExpressionVisitor } from "./expression_visitor.js";
import { Context } from "../context/context.js";

/**
 * A visitor class for handling constant statements.
 */
export class ConstanceVisitor extends cslVisitor<
  ConstanceStmt | [any, Expression]
> {
  private expr_visitor_: ExpressionVisitor;
  private context_: Context;

  /**
   * Creates an instance of ConstanceVisitor.
   */
  constructor() {
    super();
    this.context_ = new Context(new Map<string, any>());
    this.expr_visitor_ = new ExpressionVisitor();
  }

  /**
   * Visits a constant statement.
   * @param ctx The constant statement context.
   * @returns The constant statement instance.
   */
  override visitConstance_stmt = (
    ctx: Constance_stmtContext
  ): ConstanceStmt => {
    let stmt = this.visitConstance_list(ctx.constance_list());
    return stmt;
  };

  /**
   * Visits a constant list.
   * @param ctx The constant list context.
   * @returns An array of constant name-value pairs.
   */
  override visitConstance_list = (
    ctx: Constance_listContext
  ): ConstanceStmt => {
    let constance_list = ctx.constance();
    let constance_stmt = new ConstanceStmt();

    for (let constance of constance_list) {
      let constance_pair = this.visitConstance(constance);
      let constance_name = constance_pair[0];
      let value = constance_pair[1].try_get_value();

      if (value == undefined) {
        value = constance_pair[1].get_value(this.context_);

        if (value == undefined) {
          throw new Error(`Constance value ${constance_name} is undefined`);
        }
      }

      constance_stmt.add_constance(constance_name, value);

      if (this.context_.get_symbol(constance_name) != undefined) {
        throw new Error(`Constance ${constance_name} is multiply defined`);
      }

      this.context_.set_global_symbol(constance_name, value);
    }
    return constance_stmt;
  };

  /**
   * Visits a constant.
   * @param ctx The constant context.
   * @returns A name-value pair representing the constant.
   */
  override visitConstance = (ctx: ConstanceContext): [any, Expression] => {
    let name = ctx.ID().getText();
    let expr: Expression | null;
    expr = this.expr_visitor_.visit(ctx.expression());

    if (expr == null) {
      throw new Error(`Constance ${name} has no value`);
    }

    return [name, expr];
  };
}
