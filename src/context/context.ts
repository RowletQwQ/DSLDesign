// 应用运行的上下文
export interface JsonObj {
    [key: string]: any;
}
export class Context {
    // 符号表
    private symbol_table_: Map<string, boolean | number | string | JsonObj | undefined>;
    private global_context_: Context | undefined;
    private upper_context_: Context | undefined; // 上层上下文

    constructor() {
        this.symbol_table_ = new Map<string, boolean | number | string | JsonObj | undefined>();
        this.global_context_ = undefined;
    }

    // 设置全局上下文
    set_global_context(context: Context) {
        this.global_context_ = context;
    }

    // 设置上层上下文
    set_upper_context(context: Context) {
        this.upper_context_ = context;
        this.global_context_ = context.get_global_context();
    }

    // 导入符号表
    import_symbol_table(symbol_table: Map<string, boolean | number | string | JsonObj | undefined>) {
        for (let [key, value] of symbol_table) {
            this.symbol_table_.set(key, value);
        }
    }

    // 设置符号
    set_symbol(name: string, value: any) {
        this.symbol_table_.set(name, value);
    }

    set_global_symbol(name: string, value: any) {
        if (this.global_context_ != undefined) {
            this.global_context_.set_global_symbol(name, value);
        } else {
            this.set_symbol(name, value);
        }
    }

    set_upper_symbol(name: string, value: any) {
        // 供input语句使用
        if (this.upper_context_ != undefined) {
            this.upper_context_.set_symbol(name, value);
        } else {
            this.set_symbol(name, value);
        }
    }

    // 获取符号
    get_symbol(name: string): boolean | number | string | JsonObj | undefined {
        // 从当前上下文中获取
        let value = this.symbol_table_.get(name);
        if (value != undefined) {
            return value;
        }
        // 如果不在当前上下文中，则从全局上下文中获取
        if (this.global_context_ != undefined) {
            return this.global_context_.get_symbol(name);
        }
        return undefined;
    }

    get_global_context(): Context | undefined {
        return this.global_context_;
    }

    get_upper_context(): Context | undefined {
        return this.upper_context_;
    }
}