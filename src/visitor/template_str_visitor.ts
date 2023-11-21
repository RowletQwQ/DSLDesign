import { Expression } from "../expr/expression.ts";
import { TemplateStringExpr } from "../expr/template_string_expr.ts";
import { Template_stringContext, Template_string_exprContext } from "../parser/cslParser.ts";
import { cslVisitor } from "../parser/cslVisitor.ts";
import { ExpressionVisitor } from "./expression_visitor.ts";

export class TemplateStringVisitor extends cslVisitor<TemplateStringExpr> {
    private expr_visitor_: ExpressionVisitor;
    constructor() {
        super();
        this.expr_visitor_ = new ExpressionVisitor();
    }
    override visitTemplate_string = (ctx: Template_stringContext): TemplateStringExpr => {
        let parts_stmt = ctx.template_string_part();
        let exprs = new Array<Expression>();
        let plain_text = new Array<string>();
        for (let part_stmt of parts_stmt) {
            let stmt = part_stmt.template_string_plain_text();
            if (stmt != undefined) {
                plain_text.push(stmt.toString());
            } else {
                let stmt = part_stmt.template_string_expr();
                if (stmt != null) {
                    let expr_stmt = stmt.expression();
                    let expr = this.expr_visitor_.visit(expr_stmt);
                    if (expr instanceof Array || expr == null) {
                        throw new Error("Template string expression Parse error");
                    }
                    exprs.push(expr);
                }
            }
        }
        return new TemplateStringExpr(plain_text, exprs);
    }
}