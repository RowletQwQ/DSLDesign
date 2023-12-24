hello{
    say "此脚本用于测试循环语句"
    say "请输入'loop'以进入循环测试"
    goto chatbox
}

chatbox{
    "loop" => {
        goto looping
    }
    default => {
        say "输入错误，请输入'loop'以进入循环测试"
    }
}

topic looping {
    say "Please input the number of times you want to loop:"
    input times
    set i := 0
    loop when i < times {
        if ( i % 10 = 0 ) => {
            say `This is the ${i + 1}st time`
        }
        elif ( i % 10 = 1 ) => {
            say `This is the ${i + 1}nd time`
        }
        elif ( i % 10 = 2 ) => {
            say `This is the ${i + 1}rd time`
        } else => {
            say `This is the ${i + 1}th time`
        }
        set i := i + 1
    }
    exit
}