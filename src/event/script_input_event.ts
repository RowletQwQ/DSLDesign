
export class ScriptInputEvent {
    private input_: string | null;
    private is_handled_: boolean = false; // 用于计时,如果在一定时间内没有处理,则认为是超时
    constructor(input: string | null, is_handled: boolean = false) {
        this.input_ = input;
        this.is_handled_ = is_handled;
    }

    get_input(): string | null{
        return this.input_;
    }

    get_is_handled(): boolean {
        return this.is_handled_;
    }
}