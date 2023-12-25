hello{
    say "此脚本用于测试match语句"
    say "match语句利用正则表达式匹配字符串"
    say "请输入start开始测试"
    set global balance := 0
    goto chatbox
}

chatbox {
    "start" => {
        say "请输入一个字符串"
        goto match_sentence
    }
    "timer" => {
        say "请输入一个字符串"
        goto match_timer
    }
    default => {
        say "输入错误"
        goto chatbox
    }
}

topic match_sentence {
    match input {
        "充值" => {
            say "请输入你想充值的金额"
            input value assert value > 0
            set global balance = balance + value   
            say `充值成功, 剩余额度为${balance}`
        }
        ".*提现.*" => {
            say "提现成功"
        }
        ".*转账.*" => {
            say "转账成功"
        }
        ".*查询.*" => {
            say "查询成功"
        }
        ".*退出.*" => {
            say "退出成功"
        }
        ".*登录.*" => {
            say "登录成功"
        }
        default => {
            say "输入错误"
        }
    }
}

topic match_timer {
    match input {
        ".*" => {
            say "成功输入"
        }
        default => {
            say "输入错误"
        }
    } when silence 10 => {
        say "超时"
    }
}