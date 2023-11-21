import { Context } from "../context/context.ts";
import { Stmt, StmtType } from "./stmt.ts";

// 所有command stmt的基类
export enum CommandStmtType {
    SAY_STMT,           //< say语句
    GOTO_STMT,          //< goto语句
    MENU_STMT,          //< 菜单语句
    FETCH_STMT,         //< 获取语句
    POST_STMT,          //< post语句
    SET_STMT,           //< 设置语句
    INPUT_STMT,         //< 输入语句
    IF_STMT,            //< if语句
    LOOP_STMT,          //< 循环语句
    ASSERT_STMT,        //< 断言语句
    WHEN_STMT,          //< when语句,在循环中使用
    WHEN_SILENCE_STMT,  //< when silence语句,在涉及到输入时使用
    MATCH_STMT,         //< match语句
    CASE_STMT,          //< case语句
    CONTINUE_STMT,      //< continue语句
    BREAK_STMT,         //< break语句
}

export interface CommandStmt extends Stmt {
    // 获取命令类型
    get_cmd_type(): CommandStmtType;

}