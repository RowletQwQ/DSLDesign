
import { Context } from "../context/context.ts";
import { ScriptVisitor } from "../visitor/script_visitor.ts";


/**
 * @brief: instance.ts 实例
 * 表示一个脚本文件的运行实例
 */

export class Instance {
    private local_context_: Context;
    private global_context_: Context;
}