
/**
 * @brief executor每执行完一条指令后，会返回一个ResultEvent
 * ResultEvent中包含了执行结果的类型，以及执行结果的内容
 * ResultEvent中的内容，会向着父级的Executor传递
 */
export enum ResultType {
    VOID,   // 无返回值
    GOTO,   // 跳转到某个标签
    INPUT,  // 需要输入
    OUTPUT, // 需要输出
    EOF,    // 已经无法再执行了
}

export class ResultEvent {
    private return_code_: number;
    private result_: string;
    private result_type_: ResultType;
    
    constructor(return_code: number, result: string, result_type: ResultType) {
        this.return_code_ = return_code;
        this.result_ = result;
        this.result_type_ = result_type;
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
}