import { Expression } from "../expr/expression.js";
import { TemplateStringExpr } from "../expr/template_string_expr.js";
import { Template_stringContext, Template_string_exprContext } from "../parser/cslParser.js";
import { cslVisitor } from "../parser/cslVisitor.js";
import { ExpressionVisitor } from "./expression_visitor.js";

/**
 * Represents a visitor for template string expressions.
 */
export class TemplateStringVisitor extends cslVisitor<TemplateStringExpr> {
    private expr_visitor_: ExpressionVisitor;

    /**
     * Initializes a new instance of the TemplateStringVisitor class.
     */
    constructor() {
        super();
        this.expr_visitor_ = new ExpressionVisitor();
    }

    /**
     * Visits a template string context and returns a TemplateStringExpr object.
     * @param ctx The template string context to visit.
     * @returns A TemplateStringExpr object representing the visited template string.
     * @throws Error if there is a parse error in the template string expression.
     */
    override visitTemplate_string = (ctx: Template_stringContext): TemplateStringExpr => {
        let parts_stmt = ctx.template_string_part();
        let parts: (string | Expression)[] = [];

        for (let part_stmt of parts_stmt) {
            let stmt = part_stmt.template_string_plain_text();

            if (stmt != undefined) {
                parts.push(stmt.getText());
            } else {
                let stmt = part_stmt.template_string_expr();

                if (stmt != null) {
                    let expr_stmt = stmt.expression();
                    let expr = this.expr_visitor_.visit(expr_stmt);

                    if (expr instanceof Array || expr == null) {
                        throw new Error("Template string expression Parse error");
                    }

                    parts.push(expr);
                }
            }
        }

        return new TemplateStringExpr(parts);
    }
}