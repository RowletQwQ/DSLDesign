import { Context, JsonObj } from "../context/context.js";
import { ExprType, Expression } from "./expression.js";

/**
 * Represents a JSON expression.
 */
export class JsonExpr implements Expression {
  private json_map_: Map<string, Expression>;
  private item_: JsonObj | undefined;

  /**
   * The constructor of the JsonExpr class.
   * @param json_map The map that stores the key-value pairs of the JSON object.
   */
  constructor(json_map: Map<string, Expression>) {
    this.json_map_ = json_map;
    this.item_ = undefined;
  }

  /**
   * Get map of the json expression.
   * @returns The map of the json expression.
   */
  get_map(): Map<string, Expression> {
    return this.json_map_;
  }

  /**
   * Get the value type of the expression.
   * @returns {string} The value type of the expression.
   */
  get_value_type(): string {
    return "object";
  }

  /**
   * Get the type of the expression.
   * @returns {ExprType} The type of the expression.
   */
  get_type(): ExprType {
    return ExprType.JSON;
  }

  /**
   * Retrieves the value of the JSON object.
   * @param context The context of runtime.
   * @returns The JSON object.
   */
  get_value(context: Context): JsonObj {
    if(this.item_) {
      return this.item_;
    }
    let result: JsonObj = {};
    for (let [key, value] of this.json_map_) {
      result[key] = value.get_value(context);
    }
    this.item_ = result;
    return result;
  }

  /**
   * Tries to get the value of the JSON object.
   * @returns The JSON object value.
   */
  try_get_value(): JsonObj {
    if(this.item_) {
      return this.item_;
    }
    let result: { [key: string]: any } = {};
    for (let [key, value] of this.json_map_) {
      result[key] = value.try_get_value();
    }
    this.item_ = result;
    return result;
  }

  /**
   * Adds a map of key-value pairs to the JSON map.
   * @param json_map The map of key-value pairs to add.
   */
  add_map(json_map: Map<string, Expression>) {
    for (let [key, value] of json_map) {
      this.json_map_.set(key, value);
    }
  }
}
