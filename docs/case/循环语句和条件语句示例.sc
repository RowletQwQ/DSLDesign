hello{
    say "此脚本用于测试循环语句和条件判断语句"
    say "我将实现素数的打印"
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
    say "请输入一个大于2的整数"
    say "随后我将告诉你大于这个数的第一个素数"
    input num
    if (num < 2) => {
        say "输入错误，请输入一个大于2的整数"
        goto looping
    } else => {
        set prime := num + 1
        loop {
            if (prime <= 13) => {
                if (prime = 3 or prime = 5 or prime = 7 or prime = 11 or prime = 13) => {
                    say `大于${num}的第一个素数是${prime}`
                    break
                } elif (prime % 2 = 0 or prime % 3 = 0 ) => {
                    set prime = prime + 1
                } elif (prime % 5 = 0 or prime % 7 = 0) => {
                    set prime = prime + 1
                } elif (prime % 11 = 0 or prime % 13 = 0) => {
                    set prime = prime + 1
                }
            } else => {
                set i := 2
                loop when i < prime {
                    if (prime % i = 0) => {
                        set prime = prime + 1
                        break
                    }
                    set i = i + 1
                }
                if (i = prime) => {
                    say `大于${num}的第一个素数是${prime}`
                    break
                }
            }
        }
    }
}