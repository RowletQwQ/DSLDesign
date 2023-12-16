// 应用运行的上下文
export interface JsonObj {
    [key: string]: any;
}
/**
 * Represents a context that stores symbols and provides access to them.
 */
export class Context {
    private symbol_table_: Map<string, boolean | number | string | JsonObj | undefined>;
    private global_context_: Context | undefined;
    private upper_context_: Context | undefined;

    /**
     * Creates a new instance of the Context class.
     */
    constructor() {
        this.symbol_table_ = new Map<string, boolean | number | string | JsonObj | undefined>();
        this.global_context_ = undefined;
        this.upper_context_ = undefined;
    }

    /**
     * Sets the global context for this context.
     * @param context The global context to set.
     */
    set_global_context(context: Context) {
        this.global_context_ = context;
    }

    /**
     * Sets the upper context for this context.
     * @param context The upper context to set.
     */
    set_upper_context(context: Context) {
        this.upper_context_ = context;
        this.global_context_ = context.get_global_context();
    }

    /**
     * Imports symbols from the given symbol table into this context.
     * @param symbol_table The symbol table to import.
     */
    import_symbol_table(symbol_table: Map<string, boolean | number | string | JsonObj | undefined>) {
        for (let [key, value] of symbol_table) {
            this.symbol_table_.set(key, value);
        }
    }

    /**
     * Sets the value of a symbol in this context.
     * @param name The name of the symbol.
     * @param value The value to set.
     */
    set_symbol(name: string, value: any) {
        this.symbol_table_.set(name, value);
    }

    /**
     * Sets the value of a symbol in the global context.
     * If the global context is not defined, sets the symbol in this context.
     * @param name The name of the symbol.
     * @param value The value to set.
     */
    set_global_symbol(name: string, value: any) {
        if (this.global_context_ != undefined) {
            this.global_context_.set_global_symbol(name, value);
        } else {
            this.set_symbol(name, value);
        }
    }

    /**
     * Sets the value of a symbol in the upper context.
     * If the upper context is not defined, sets the symbol in this context.
     * @param name The name of the symbol.
     * @param value The value to set.
     */
    set_upper_symbol(name: string, value: any) {
        if (this.upper_context_ != undefined) {
            this.upper_context_.set_symbol(name, value);
        } else {
            this.set_symbol(name, value);
        }
    }

    /**
     * Gets the value of a symbol from this context.
     * If the symbol is not found in this context, searches in the upper context.
     * If the symbol is not found in the upper context, searches in the global context.
     * @param name The name of the symbol.
     * @returns The value of the symbol, or undefined if not found.
     */
    get_symbol(name: string): boolean | number | string | JsonObj | undefined {
        let value = this.symbol_table_.get(name);
        if (value != undefined) {
            return value;
        }
        if (this.upper_context_ != undefined) {
            return this.upper_context_.get_symbol(name);
        }
        if (this.global_context_ != undefined) {
            return this.global_context_.get_symbol(name);
        }
        return undefined;
    }

    /**
     * Gets the global context associated with this context.
     * @returns The global context, or undefined if not set.
     */
    get_global_context(): Context | undefined {
        return this.global_context_;
    }

    /**
     * Gets the upper context associated with this context.
     * @returns The upper context, or undefined if not set.
     */
    get_upper_context(): Context | undefined {
        return this.upper_context_;
    }
}