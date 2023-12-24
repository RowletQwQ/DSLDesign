/**
 * @brief executor每执行完一条指令后，会返回一个ResultEvent
 * ResultEvent中包含了执行结果的类型，以及执行结果的内容
 * ResultEvent中的内容，会向着父级的Executor传递
 */
export enum ResultType {
  SUCCESS, // 成功执行
  RELOAD, // 重新加载
  NEED_ASYNC, // 需要进行异步操作
  GOTO, // 跳转到某个标签
  BREAK, // 跳出循环
  CONTINUE, // 继续执行
  INPUT, // 需要输入
  MENU, // 会提供一个菜单选择
  OUTPUT, // 需要输出
  EXIT, // 退出
  END, // 已经无法再执行了
  ERROR, // 发生错误
}

export enum AsycOp {
  GET, // get操作
  POST, // post操作
}

export interface Payload {
  op: AsycOp;
  url: URL;
  data: any;
}
/**
 * Represents a result event.
 */
export class ResultEvent {
  private return_code_: number;
  private result_: string;
  private result_type_: ResultType;
  private timer_: number; // 当输入时，需要设置一个超时时间
  private menu_: string[] = []; // 当需要菜单时，需要设置菜单内容
  private payload_: Payload; // 用于传递额外的数据

  /**
   * Creates a new instance of ResultEvent.
   * @param return_code The return code.
   * @param result The result.
   * @param result_type The result type.
   * @param timer The timer (optional).
   */
  constructor(
    return_code: number,
    result: string,
    result_type: ResultType,
    timer: number = 0
  ) {
    this.return_code_ = return_code;
    this.result_ = result;
    this.result_type_ = result_type;
    this.timer_ = timer;
  }

  /**
   * Sets the menu.
   * @param menu The menu to set.
   */
  set_menu(menu: string[]) {
    this.menu_ = menu;
  }

  set_payload(payload: Payload) {
    this.payload_ = payload;
  }

  get_payload(): Payload {
    return this.payload_;
  }

  /**
   * Gets the menu.
   * @returns The menu.
   */
  get_menu(): string[] {
    return this.menu_;
  }

  /**
   * Gets the return code.
   * @returns The return code.
   */
  get_return_code(): number {
    return this.return_code_;
  }

  /**
   * Gets the result.
   * @returns The result.
   */
  get_result(): string {
    return this.result_;
  }

  /**
   * Gets the result type.
   * @returns The result type.
   */
  get_result_type(): ResultType {
    return this.result_type_;
  }

  /**
   * Gets the timer.
   * @returns The timer.
   */
  get_timer(): number {
    return this.timer_;
  }

  /**
   * Checks if the result type is MENU.
   * @returns True if the result type is MENU, false otherwise.
   */
  is_menu(): boolean {
    return this.result_type_ == ResultType.MENU;
  }

  /**
   * Checks if the result type is END.
   * @returns True if the result type is END, false otherwise.
   */
  is_finished(): boolean {
    return this.result_type_ == ResultType.END;
  }

  /**
   * Checks if the result type is EXIT.
   * @returns True if the result type is EXIT, false otherwise.
   */
  is_exit(): boolean {
    return this.result_type_ == ResultType.EXIT;
  }

  /**
   * Checks if the result type is CONTINUE.
   * @returns True if the result type is CONTINUE, false otherwise.
   */
  is_continue(): boolean {
    return this.result_type_ == ResultType.CONTINUE;
  }

  /**
   * Checks if the result type is INPUT.
   * @returns True if the result type is INPUT, false otherwise.
   */
  is_input(): boolean {
    return this.result_type_ == ResultType.INPUT;
  }

  /**
   * Checks if the result type is OUTPUT.
   * @returns True if the result type is OUTPUT, false otherwise.
   */
  is_output(): boolean {
    return this.result_type_ == ResultType.OUTPUT;
  }

  /**
   * Checks if the result type is BREAK.
   * @returns True if the result type is BREAK, false otherwise.
   */
  is_break(): boolean {
    return this.result_type_ == ResultType.BREAK;
  }

  is_need_async(): boolean {
    return this.result_type_ == ResultType.NEED_ASYNC;
  }

  is_error(): boolean {
    return this.result_type_ == ResultType.ERROR;
  }
}
