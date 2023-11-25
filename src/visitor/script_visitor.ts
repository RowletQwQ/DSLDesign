import { ScriptContext } from "../parser/cslParser.js";
import { cslVisitor } from "../parser/cslVisitor.js";
import { ScriptStmt } from "../stmt/script_stmt.js";
import { Stmt } from "../stmt/stmt.js";
import { ChatBoxVisitor } from "./chatbox_visitor.js";
import { ConstanceVisitor } from "./constance_visitor.js";
import { HelloVisitor } from "./hello_visitor.js";
import { TopicVisitor } from "./topic_visitor.js";

export class ScriptVisitor extends cslVisitor<ScriptStmt> {
    private chatbox_visitor_: ChatBoxVisitor;
    private topic_visitor_: TopicVisitor;
    private hello_visitor_: HelloVisitor;
    private constance_visitor_: ConstanceVisitor;
    constructor() {
        super();
        this.chatbox_visitor_ = new ChatBoxVisitor();
        this.topic_visitor_ = new TopicVisitor();
        this.hello_visitor_ = new HelloVisitor();
        this.constance_visitor_ = new ConstanceVisitor();
    }

    override visitScript = (ctx: ScriptContext): ScriptStmt => {
        let constance_stmt = ctx.constance_stmt();
        let topic_stmt = ctx.topic_stmt();
        let hello_stmt = ctx.hello_stmt();
        let chatbox_stmt = ctx.chatbox_stmt();

        let constance: Stmt | null = null;
        let topic: Stmt[] = [];
        let hello: Stmt | null = null;
        

        // 除了 Topic,chatbox 以外的其他语句都是可选的,且至多出现一次
        // ChatBox 语句必须出现一次
        if (constance_stmt.length > 1) {
            throw new Error("Multiple constance statements");
        }
        if (hello_stmt.length > 1) {
            throw new Error("Multiple hello statements");
        }
        if (chatbox_stmt.length != 1) {
            throw new Error("There must be one and only one chatbox statement");
        }

        // 解析 ConstanceStmt
        if (constance_stmt.length == 1) {
            constance = this.constance_visitor_.visitConstance_stmt(constance_stmt[0]);
        }

        // 解析 TopicStmt
        for (let i = 0; i < topic_stmt.length; i++) {
            topic.push(this.topic_visitor_.visitTopic_stmt(topic_stmt[i]));
        }

        // 解析 HelloStmt
        if (hello_stmt.length == 1) {
            hello = this.hello_visitor_.visitHello_stmt(hello_stmt[0]);
        }
        // 解析 ChatBoxStmt
        let chatbox = this.chatbox_visitor_.visitChatbox_stmt(chatbox_stmt[0]);

        return new ScriptStmt(hello, chatbox, topic, constance);
    }

}