// 先读取本地语法文件
import { readFileSync } from "fs";
import { SessionStage } from "./session/session_stage.js";
import { SessionEvent } from "./event/session_event.js";
import { createInterface } from "readline";
import { exit } from "process";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * The entry of the CLI chatbot.
 * @param script_path The path of the script file.
 * @usage node <path-to-exec.js> <path-to-script>
 */
try {
  // 语法文件通过命令行参数传入
  let script_path = process.argv[2];
  // 读取文件
  let script = readFileSync(script_path).toString();
  // 创建一个会话
  let session = new SessionStage();
  // 生成会话事件
  let session_event = new SessionEvent("my_bot", "1", script);
  session.handle_event(session_event);
  // 获取运行实例
  let instance = session_event.get_instance();
  // 运行
  if (instance == null) {
    throw new Error("instance is null");
  }
  instance.start();
  instance
    .run((interrupt_event, timer) => {
      return new Promise<void>(async (resolve, reject) => {
        if (interrupt_event.is_input()) {
          if (timer) {
            const timeoutId = setTimeout(() => {
              resolve();
            }, timer * 1000);
            rl.question(">>>", (answer) => {
              clearTimeout(timeoutId);
              answer.trim();
              instance?.push_input(answer);
              resolve();
            });
          } else {
            rl.question(">>>", (answer) => {
              answer.trim();
              instance?.push_input(answer);
              resolve();
            });
          }
        } else if (interrupt_event.is_output()) {
          console.log(interrupt_event.get_description());
          resolve();
        } else if (interrupt_event.is_error()) {
          reject(new Error(interrupt_event.get_description()));
        } else if (interrupt_event.is_exit()) {
          console.log("Chatbot exit");
          exit(0);
        } else if (interrupt_event.is_show_menu()) {
          // 菜单展示，即提供选项供用户选择
          let menu = interrupt_event.get_menu();
          let index = 0;
          for (let option of menu) {
            console.log(`${index++}. ${option}`);
          }
          let validInput = false;
          let input = "";
          while (!validInput) {
            input = await new Promise<string>((resolve) => {
              rl.question(">>>", (answer) => {
                answer.trim();
                resolve(answer);
              });
            });
            if (input == "") {
              continue;
            }
            let num = parseInt(input);
            if (num < 0 || num >= menu.length) {
              console.log("Invalid input");
              continue;
            }
            validInput = true;
          }
          instance?.push_input(menu[parseInt(input)]);
          resolve();
        }
      });
    })
    .catch((error) => {
      console.log(error);
      exit(1);
    });
} catch (error) {
  console.log(error);
}
