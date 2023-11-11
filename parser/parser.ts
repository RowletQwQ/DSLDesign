import { Scanner,Token,TokenType } from "./scanner";

enum NodeKind {
  Program, // 根节点
  BinaryExpression, // 二元表达式
  BlockStatement, // 代码块
  /* 以下为模版字符串相关 */
  TemplateLiteral, // 模板字符串
  TemplateElement, // 模板元素
  /* 以下为主题相关 */
  TopicStatement, // 主题语句
  TopicName, // 主题名
  /* 以下为分支选择相关 */
  SwitchStatement, // 选择语句
  CaseClause, // 选择分支
  /* 以下为简单语句 */
  SayStatement, // 说语句
  GotoStatement, // 跳转语句
  ExitStatement, // 退出语句
  /* 以下为叶节点 */
  Keyword,
  Identifier,
  NumberLiteral,
  StringLiteral,
  Char,
  Operator,
  Delimiter,
}
class ASTNode {
  kind: NodeKind;
  children: ASTNode[] = [];
  parent: ASTNode | null = null;
  value: string | null = null;
  constructor(kind: NodeKind) {
    this.kind = kind;
  }
  public addChild(node: ASTNode): void {
    this.children.push(node);
    node.parent = this;
  }
}

class Parser {
  private root: ASTNode;
  private current: ASTNode;
  constructor() {
    
  }
  
  public parseSourceCode(scanner: Scanner): void {
    this.root = new ASTNode(NodeKind.Program);
    this.current = this.root;
    let token = scanner.getNextToken();
    while(token !== null){
        if(token.type != TokenType.Keyword){
            // 不是关键字，报错
            scanner.traceback();
            throw new Error(`Expect keyword, but got unknown keyword ${token.value}`)
        }
        switch(token.value){
            case "topic":
                this.parseTopic(scanner);
                break;
        }         
    }  
  }

  private parseTopic(scanner: Scanner): void {
    const node = new ASTNode(NodeKind.TopicStatement);
    this.current.addChild(node);
    
    let token = scanner.getNextToken();
    if (token === null || token.type !== TokenType.Identifier) {
      scanner.traceback();
      throw new Error(`Expect identifier, but got ${token}`);
    }
    const name = new ASTNode(NodeKind.TopicName);
    name.value = token.value;
    node.addChild(name);
    
  }
}
