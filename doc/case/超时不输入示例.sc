hello{
    say "此脚本用于测试超时不输入"
    say "请输入test开始超时测试"
    goto chatbox
}

chatbox {
    "test" =>  {
        say "开始超时测试"
        say "请输入任意字符"
        goto overtime    
    }
    "exit" => {
        say "再见"
        exit
    }
    default => {
        say "我不知道你在说什么,请你问我其它问题"
        goto chatbox
    }
}

topic overtime {
    input id when silence 5 => {
        say "你已经超过5秒没有输入了"
        say "请重新输入test开始超时测试"
        goto chatbox
    }
    say `You have input ${id}`
    goto chatbox
}