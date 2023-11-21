import { ConstanceContext, Constance_listContext, Constance_stmtContext } from "../parser/cslParser.ts";
import { cslVisitor } from "../parser/cslVisitor.ts";
import { ConstanceStmt } from "../stmt/constance_stmt.ts";
import { Expression } from "../expr/expression.ts";
import { ExpressionVisitor } from "./expression_visitor.ts";
import { Context } from "../context/context.ts";

export class ConstanceVisitor extends cslVisitor<ConstanceStmt | [any, Expression]> {
    private expr_visitor_: ExpressionVisitor;
    private context_: Context;
    constructor() {
        super();
        this.context_ = new Context();
        this.expr_visitor_ = new ExpressionVisitor();
    }
    override visitConstance_stmt = (ctx: Constance_stmtContext): ConstanceStmt =>{
        // 返回 ConstanceStmt 实例
        let stmt = this.visitConstance_list(ctx.constance_list());
        return stmt;
    }

    override visitConstance_list = (ctx: Constance_listContext): ConstanceStmt =>{
        // 在这里实现访问 Constance_list 的逻辑
        // ...
        // 返回一个数组，数组的每个元素是一个二元组，第一个元素是常量的名字，第二个元素是常量的值
        let constance_list = ctx.constance_list();
        let constance_stmt: ConstanceStmt;
        // 检查这个 constance_list 是否为空
        if (constance_list == undefined) {
            constance_stmt = new ConstanceStmt();
        } else {
            constance_stmt = this.visitConstance_list(constance_list);
        }
        // 获取最右边的常量
        let constance_pair_stmt = ctx.constance();
        let constance_pair = this.visitConstance(constance_pair_stmt);
        // 获取常量名
        let constance_name = constance_pair[0];
        // 尝试计算表达式的值
        let value = constance_pair[1].try_get_value();
        if (value == undefined) {
            // 如果表达式的值是 undefined, 传入之前解析出的上下文,看看是不是和其他常量有关
            value = constance_pair[1].get_value(this.context_);
            if (value == undefined) {
                // 如果表达式的值还是 undefined, 报错
                throw new Error(`Constance value ${constance_name} is undefined`);
            }
        }
        constance_stmt.add_constance(constance_name, value);
        // 加入当前解析的上下文
        // 先检查一下这个常量名是否已经存在
        if (this.context_.get_symbol(constance_name) != undefined) {
            throw new Error(`Constance ${constance_name} is multiply defined`);
        }
        this.context_.set_symbol(constance_name, value);
        // 最后返回stmt
        return constance_stmt;
    }

    override visitConstance = (ctx: ConstanceContext): [any, Expression] => {
        // 返回一个二元组，第一个元素是常量的名字，第二个元素是表达式
        let name = ctx.ID().getText();
        let expr:Expression | null;
        expr = this.expr_visitor_.visit(ctx.expression());
        if (expr == null) {
            throw new Error(`Constance ${name} has no value`);
        }
        return [name, expr]
    }
}