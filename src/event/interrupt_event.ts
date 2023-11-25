export enum InterruptReason {
    EXIT,
    INPUT,
    OUTPUT,
    ERROR,
} 
/**
 * @brief 用于中断实例执行，从而获取输入，或者报错
 */
export class InterruptEvent {
    private reason_: InterruptReason;
    private description_: string;
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

}