import { Context, JsonObj } from "../context/context.js";
import { ExprType, Expression } from "./expression.js";

export class JsonExpr implements Expression {
  private json_map_: Map<string, Expression>;

  constructor(json_map: Map<string, Expression>) {
    this.json_map_ = json_map;
  }

  get_map(): Map<string, Expression> {
    return this.json_map_;
  }

  get_value_type(): string {
    return "object";
  }

  get_type(): ExprType {
    return ExprType.JSON;
  }

  get_value(context: Context): JsonObj {
    let result: JsonObj = {};
    for (let [key, value] of this.json_map_) {
      result[key] = value.get_value(context);
    }
    return result;
  }

  try_get_value(): JsonObj {
    let result: { [key: string]: any } = {};
    for (let [key, value] of this.json_map_) {
      result[key] = value.try_get_value();
    }
    return result;
  }

  add_map(json_map: Map<string, Expression>) {
    for (let [key, value] of json_map) {
      this.json_map_.set(key, value);
    }
  }
}
