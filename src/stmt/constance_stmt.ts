import { Stmt, StmtType } from "./stmt.js";

// 客服机器人一开始的常量声明模块
/**
 * Represents a constant statement.
 */
export class ConstanceStmt implements Stmt {
  private constances_map_: Map<string, string | number | boolean | object>;

  /**
   * Returns the type of the statement.
   * @returns The statement type.
   */
  type(): StmtType {
    return StmtType.CONSTANCE_STMT;
  }

  /**
   * Creates a new instance of ConstanceStmt.
   */
  constructor() {
    this.constances_map_ = new Map<
      string,
      string | number | boolean | object
    >();
  }

  /**
   * Adds a constant to the statement.
   * @param name - The name of the constant.
   * @param value - The value of the constant.
   */
  add_constance(name: string, value: string | number | boolean | object) {
    this.constances_map_.set(name, value);
  }

  /**
   * Retrieves the value of a constant by its name.
   * @param name - The name of the constant.
   * @returns The value of the constant, or undefined if not found.
   */
  get_constance(name: string): string | number | boolean | undefined | object {
    return this.constances_map_.get(name);
  }

  /**
   * Retrieves the map of constants.
   * @returns The map of constants.
   */
  get_map(): Map<string, string | number | boolean | object> {
    return this.constances_map_;
  }

  /**
   * Returns the type of the statement.
   * @returns The statement type.
   */
  get_type(): StmtType {
    return StmtType.CONSTANCE_STMT;
  }
}
