import * as e from "express";

export enum InterruptReason {
  EXIT,     // 退出
  INPUT,    // 输入
  OUTPUT,   // 输出
  ERROR,    // 报错
  SHOW_MENU,// 显示菜单
  MOCK,     // 用于测试
}
/**
 * @brief 用于中断实例执行，从而获取输入，或者报错
 */
/**
 * Represents an interrupt event.
 */
export class InterruptEvent {
  private reason_: InterruptReason;
  private description_: string;
  private menu_: Array<string>;

  /**
   * Creates an interrupt event.
   * @param reason The interrupt reason.
   * @param description The interrupt description.
   */
  constructor(reason: InterruptReason, description: string) {
    this.reason_ = reason;
    this.description_ = description;
  }

  /**
   * Gets the interrupt reason.
   * @returns The interrupt reason.
   */
  get_reason(): InterruptReason {
    return this.reason_;
  }

  /**
   * Gets the interrupt description.
   * @returns The interrupt description.
   */
  get_description(): string {
    return this.description_;
  }

  /**
   * Sets the menu options for the interrupt event.
   * @param menu The menu options.
   */
  set_menu(menu: Array<string>) {
    this.menu_ = menu;
  }

  /**
   * Gets the menu options for the interrupt event.
   * @returns The menu options.
   */
  get_menu(): Array<string> {
    return this.menu_;
  }

  /**
   * Checks if the interrupt reason is EXIT.
   * @returns True if the interrupt reason is EXIT, otherwise false.
   */
  is_exit(): boolean {
    return this.reason_ == InterruptReason.EXIT;
  }

  /**
   * Checks if the interrupt reason is INPUT.
   * @returns True if the interrupt reason is INPUT, otherwise false.
   */
  is_input(): boolean {
    return this.reason_ == InterruptReason.INPUT;
  }

  /**
   * Checks if the interrupt reason is OUTPUT.
   * @returns True if the interrupt reason is OUTPUT, otherwise false.
   */
  is_output(): boolean {
    return this.reason_ == InterruptReason.OUTPUT;
  }

  /**
   * Checks if the interrupt reason is ERROR.
   * @returns True if the interrupt reason is ERROR, otherwise false.
   */
  is_error(): boolean {
    return this.reason_ == InterruptReason.ERROR;
  }

  /**
   * Checks if the interrupt reason is SHOW_MENU.
   * @returns True if the interrupt reason is SHOW_MENU, otherwise false.
   */
  is_show_menu(): boolean {
    return this.reason_ == InterruptReason.SHOW_MENU;
  }
}

export class InterruptEventMock extends InterruptEvent {
  constructor() {
    super(InterruptReason.MOCK, "mock");
  }
}