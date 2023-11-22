
export class ScriptInputEvent {
    private input_: string | undefined;
    private is_handled_: boolean = false; // 用于计时,如果在一定时间内没有处理,则认为是超时
    constructor(input: string | undefined, is_handled: boolean = false) {
        this.input_ = input;
        this.is_handled_ = is_handled;
    }

    get_input(): string | undefined{
        return this.input_;
    }

    is_handled(): boolean {
        return this.is_handled_;
    }
}