import { Context } from "../context/context.js";

export enum ExprType {
  NONE,
  ARITHMETIC,       //< 算术表达式
  COMPARISON,       //< 比较表达式
  CONJUNCTION,      //< 逻辑连接表达式(AND OR)
  FIELD,            //< 字段表达式,即变量
  VALUE,            //< 值表达式,即常量
  UNARY,            //< 一元表达式,包括not和负号
  POSTFIX,          //< 后缀表达式,包括成员访问和数组下标访问
  JSON,             //< JSON表达式
  TEMPLATE_STRING,  //< 模板字符串表达式
}

/**
 * 表达式接口
 */
export interface Expression {
  /**
   * 利用应用上下文来获取表达式的值
   * @param context 应用上下文
   * @returns 表达式的值
   */
  get_value(context: Context): string | number | boolean | object | undefined;

  /**
   * 不利用上下文，直接计算表达式的值，用于表达式优化
   * @returns 表达式的值
   */
  try_get_value(): string | number | boolean | object | undefined;

  /**
   * 获取表达式的类型
   * @returns 表达式的类型
   */
  get_type(): ExprType;

  /**
   * 获取表达式的值类型
   * @returns 表达式的值类型
   */
  get_value_type(): string;
}
