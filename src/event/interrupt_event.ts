export enum InterruptReason {
    EXIT,       // 退出
    INPUT,      // 输入
    OUTPUT,     // 输出
    ERROR,      // 报错
    SHOW_MENU,  // 显示菜单
} 
/**
 * @brief 用于中断实例执行，从而获取输入，或者报错
 */
export class InterruptEvent {
    private reason_: InterruptReason;
    private description_: string;
    private menu_: Array<string>;
    constructor(reason: InterruptReason, description: string) {
        this.reason_ = reason;
        this.description_ = description;
    }

    get_reason(): InterruptReason {
        return this.reason_;
    }

    get_description(): string {
        return this.description_;
    }

    set_menu(menu: Array<string>) {
        this.menu_ = menu;
    }

    get_menu(): Array<string> {
        return this.menu_;
    }

    is_exit(): boolean {
        return this.reason_ == InterruptReason.EXIT;
    }

    is_input(): boolean {
        return this.reason_ == InterruptReason.INPUT;
    }

    is_output(): boolean {
        return this.reason_ == InterruptReason.OUTPUT;
    }

    is_error(): boolean {
        return this.reason_ == InterruptReason.ERROR;
    }

    is_show_menu(): boolean {
        return this.reason_ == InterruptReason.SHOW_MENU;
    }

}