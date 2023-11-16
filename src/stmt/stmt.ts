// Statement的类型，对应语法中涉及的所有语句类型
export enum StmtType {
    /* 相关函数 */
    CONSTANCE_STMT,
    HELLO_STMT,
    CHATBOX_STMT,
    TOPIC_STMT,
    /* 相关命令语句 */
    SAY_STMT,
    GOTO_STMT,
    MENU_STMT,
    FETCH_STMT,
    POST_STMT,
    SET_STMT,
    INPUT_STMT,
    IF_STMT,
    LOOP_STMT,
    ASSERT_STMT,
    WHEN_STMT,
    MATCH_STMT,
}

/**
 * @brief  Stmt for Statment
 * @ingroup statement
 * @details 用于描述一个语句块，经过ANTLR解析的雨具会被进一步解析为stmt,
 * 利用内部的数据结构进行表示
 */

export interface Stmt {

    // 获取表达式的类型
    get_type(): StmtType;
}