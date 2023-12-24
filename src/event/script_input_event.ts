import { ParsedUrlQuery } from "querystring";
import { Payload } from "./result_event.js";

/**
 * Represents a script input event.
 */
export class ScriptInputEvent {
  private input_: string | undefined;
  private is_handled_: boolean = false; // 用于计时,如果在一定时间内没有处理,则认为是超时
  private payload_: Payload | null; // 用于传递额外的数据

  /**
   * Constructs a new ScriptInputEvent instance.
   * @param input The input string.
   * @param is_handled Indicates if the event has been handled.
   */
  constructor(input: string | undefined, is_handled: boolean = false) {
    this.input_ = input;
    this.is_handled_ = is_handled;
    this.payload_ = null;
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

  set_payload(payload: Payload) {
    this.payload_ = payload;
  }

  get_payload(): Payload | null {
    return this.payload_;
  }
}
