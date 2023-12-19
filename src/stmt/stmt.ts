// Statement的类型，对应语法中涉及的所有语句类型
export enum StmtType {
  SCRIPT_STMT, //< 脚本
  CONSTANCE_STMT, //< 常量声明
  HELLO_STMT, //< 初始问候声明
  CHATBOX_STMT, //< 初始聊天回复声明
  TOPIC_STMT, //< 话题声明
  COMMAND_STMT, //< 命令语句
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
