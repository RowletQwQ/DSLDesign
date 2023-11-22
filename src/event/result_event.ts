
/**
 * @brief executor每执行完一条指令后，会返回一个ResultEvent
 * ResultEvent中包含了执行结果的类型，以及执行结果的内容
 * ResultEvent中的内容，会向着父级的Executor传递
 */
export enum ResultType {
    SUCCESS,    // 成功执行
    RELOAD,     // 重新加载
    GOTO,       // 跳转到某个标签
    BREAK,      // 跳出循环
    CONTINUE,   // 继续执行
    INPUT,      // 需要输入
    MENU,       // 会提供一个菜单选择
    OUTPUT,     // 需要输出
    EXIT,       // 退出
    END,        // 已经无法再执行了
    ERROR,      // 发生错误
}

export class ResultEvent {
    private return_code_: number;
    private result_: string;
    private result_type_: ResultType;
    private timer_: number; // 当输入时，需要设置一个超时时间
    private menu_: string[] = []; // 当需要菜单时，需要设置菜单内容

    constructor(return_code: number, 
                result: string, 
                result_type: ResultType, 
                timer: number = 0) {
        this.return_code_ = return_code;
        this.result_ = result;
        this.result_type_ = result_type;
        this.timer_ = timer;
    }

    set_menu(menu: string[]) {
        this.menu_ = menu;
    }

    get_menu(): string[] {
        return this.menu_;
    }

    get_return_code(): number {
        return this.return_code_;
    }

    get_result(): string {
        return this.result_;
    }

    get_result_type(): ResultType {
        return this.result_type_;
    }

    get_timer(): number {
        return this.timer_;
    }

    is_finished(): boolean {
        return this.result_type_ == ResultType.END;
    }

    is_continue(): boolean {
        return this.result_type_ == ResultType.CONTINUE;
    }

    is_input(): boolean {
        return this.result_type_ == ResultType.INPUT;
    }

    is_output(): boolean {
        return this.result_type_ == ResultType.OUTPUT;
    }

    is_break(): boolean {
        return this.result_type_ == ResultType.BREAK;
    }

}