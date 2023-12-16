
/**
 * Represents a script input event.
 */
export class ScriptInputEvent {
    private input_: string | undefined;
    private is_handled_: boolean = false; // 用于计时,如果在一定时间内没有处理,则认为是超时

    /**
     * Constructs a new ScriptInputEvent instance.
     * @param input The input string.
     * @param is_handled Indicates if the event has been handled.
     */
    constructor(input: string | undefined, is_handled: boolean = false) {
        this.input_ = input;
        this.is_handled_ = is_handled;
    }

    /**
     * Gets the input string.
     * @returns The input string.
     */
    get_input(): string | undefined {
        return this.input_;
    }

    /**
     * Checks if the event has been handled.
     * @returns True if the event has been handled, false otherwise.
     */
    is_handled(): boolean {
        return this.is_handled_;
    }
}