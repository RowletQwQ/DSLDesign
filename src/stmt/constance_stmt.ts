import { Stmt, StmtType } from "./stmt.ts";

// 客服机器人一开始的常量声明模块
export class ConstanceStmt implements Stmt {
    private constances_map_: Map<string, string | number | boolean>;
    type(): StmtType {
        return StmtType.CONSTANCE_STMT;
    }
    constructor() {
        this.constances_map_ = new Map<string, string | number | boolean>();
    }

    add_constance(name: string, value: string | number | boolean) {
        this.constances_map_.set(name, value);
    }

    get_constance(name: string): string | number | boolean | undefined {
        return this.constances_map_.get(name);
    }

    get_map(): Map<string, string | number | boolean> {
        return this.constances_map_;
    }

    get_type(): StmtType {
        return StmtType.CONSTANCE_STMT;
    }
}