// 应用运行的上下文
export interface JsonObj {
    [key: string]: any;
}
/**
 * Represents a context that stores symbols and provides access to them.
 */
export class Context {
    private const_global_symbol_table_: Map<string, any>;
    private global_symbol_table_: Map<string, any>;
    private symbol_table_stack_: Map<string, any>[]; 

    /**
     * Creates a new instance of the Context class.
     * @param const_global_symbol_table The global symbol table that stores constants.
     */
    constructor(const_global_symbol_table: Map<string, any>) {
        this.const_global_symbol_table_ = const_global_symbol_table;
        this.global_symbol_table_ = new Map<string, any>();
        this.symbol_table_stack_ = [];
    }


    /**
     * Enters a new scope in the symbol table stack.
     */
    enter_new_scope() {
        this.symbol_table_stack_.push(new Map<string, any>());
    }

    /**
     * Exits the current scope in the symbol table stack.
     */
    exit_current_scope() {
        this.symbol_table_stack_.pop();
    }
    
    /**
     * Sets the value of a symbol in this context.
     * @param name The name of the symbol.
     * @param value The value to set.
     */
    set_local_symbol(name: string, value: any) {
        if (this.symbol_table_stack_.length == 0) {
            throw new Error("Local symbol table stack is empty.");
        }
        this.symbol_table_stack_[this.symbol_table_stack_.length - 1].set(name, value);
    }

    /**
     * Sets the value of a symbol in the global context.
     * If the global context is not defined, sets the symbol in this context.
     * @param name The name of the symbol.
     * @param value The value to set.
     */
    set_global_symbol(name: string, value: any) {
        if (this.global_symbol_table_ == undefined) {
            throw new Error("Global symbol table is undefined.");
        }
        if (this.const_global_symbol_table_.has(name)) {
            throw new Error("Cannot set value of a constant.");
        }
        this.global_symbol_table_.set(name, value);
    }

    /**
     * Assigns a value to a local symbol in the context.
     * @param name - The name of the symbol.
     * @param value - The value to assign to the symbol.
     * @throws Error if the symbol is not found in the local context.
     */
    assign_local_symbol(name: string, value: any) {
        if (this.symbol_table_stack_.length > 0) {
            for (let i = this.symbol_table_stack_.length - 1; i >= 0; i--) {
                if (this.symbol_table_stack_[i].has(name)) {
                    this.symbol_table_stack_[i].set(name, value);
                    return;
                }
            }
        }
        throw new Error("Symbol not found in local context.");
    }

    /**
     * Assigns a value to a global symbol.
     * 
     * @param name - The name of the symbol.
     * @param value - The value to assign.
     * @throws Error if the symbol is not found in the global context.
     * @throws Error if the symbol is a constant and its value cannot be changed.
     */
    assign_global_symbol(name: string, value: any) {
        if (this.global_symbol_table_.has(name)) {
            this.global_symbol_table_.set(name, value);
            return;
        }
        if (this.const_global_symbol_table_.has(name)) {
            throw new Error("Cannot set value of a constant.");
        }
        throw new Error("Symbol not found in global context.");
    }

    /**
     * Gets the value of a symbol from this context.
     * If the symbol is not found in this context, searches in the upper context.
     * If the symbol is not found in the upper context, searches in the global context.
     * @param name The name of the symbol.
     * @returns The value of the symbol, or undefined if not found.
     */
    get_symbol(name: string): boolean | number | string | JsonObj | undefined {
        if (this.symbol_table_stack_.length > 0) {
            for (let i = this.symbol_table_stack_.length - 1; i >= 0; i--) {
                if (this.symbol_table_stack_[i].has(name)) {
                    return this.symbol_table_stack_[i].get(name);
                }
            }
        }
        if (this.global_symbol_table_.has(name)) {
            return this.global_symbol_table_.get(name);
        }
        if (this.const_global_symbol_table_.has(name)) {
            return this.const_global_symbol_table_.get(name);
        }
        return undefined;
    }

    /**
     * Determines whether the context is currently in scope.
     * @returns {boolean} True if the context is in scope, false otherwise.
     */
    is_in_scope(): boolean {
        return this.symbol_table_stack_.length > 0;
    }
}
export class ContextMock extends Context{

    constructor() {
        super(new Map<string, any>());
    }
}
