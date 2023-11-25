// 先读取本地语法文件
import { readFileSync } from 'fs';
import { SessionStage } from './session/session_stage.js';
import { SessionEvent } from './event/session_event.js';
import { InterruptReason } from './event/interrupt_event.js';
import { createInterface } from 'readline';


const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

try {
    // 语法文件通过命令行参数传入
    let script_path = process.argv[2];
    // 读取文件
    let script = readFileSync(script_path).toString();
    // 创建一个会话
    let session = new SessionStage();
    // 生成会话事件
    let session_event = new SessionEvent("my_bot","1",script);
    session.handle_event(session_event);
    // 获取运行实例
    let instance = session_event.get_instance();
    // 运行
    if (instance == null) {
        throw new Error("instance is null");
    }
    instance.start();
    instance.run((interrupt_event, timer) => {
        return new Promise<void>((resolve, reject) => {
            if (interrupt_event.get_reason() == InterruptReason.INPUT) {
                if (timer) {
                    const timeoutId = setTimeout(() => {
                        resolve();
                    }, timer * 1000);
                    rl.question(">>>", (answer) => {
                        clearTimeout(timeoutId);
                        instance?.push_input(answer);
                        resolve();
                    });
                } else {
                    rl.question(">>>", (answer) => {
                        instance?.push_input(answer);
                        resolve();
                    });
                }
            } else if (interrupt_event.get_reason() == InterruptReason.OUTPUT) {
                console.log(interrupt_event.get_description());
                resolve();
            } else if (interrupt_event.get_reason() == InterruptReason.ERROR) {
                reject(new Error(interrupt_event.get_description()));
            } else {
                resolve();
            }
        });
    }).catch((error) => {
        console.log(error);
    });
} catch (error) {
    console.log(error);
}



