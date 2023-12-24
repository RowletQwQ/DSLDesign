constance{
    name := "Ruby"
    version := "1.0.0"
    author := "Yukihiro Matsumoto"
}

hello{
    say "请输入field，来做一个作用域测试"
    # 下面的语句会声明一个全局变量，全局变量的名称不能和constance中的相同
    set global is_run := false
    goto chatbox
}

chatbox{
    "field" => {
        if (is_run) => {
            say "field已经运行过了"
        } else  => {
            say "field还没有运行过"
        }
        goto field
    }
    "exit" => {
        say "bye"
        exit
    }

    default => {
        say "请你输入field进行测试, 或者输入exit退出"
    }
}

topic field {
    # :=会声明一个全新的变量
    set value := 114514     
    say `The value is ${value}`
    if ( value = 114514) => {
        set value := 1919810 # 支持多态，在这里会声明一个新的变量
        say `The value is ${value}`
        if ( value = 1919810) => {
            set value = "suka" # 这是赋值语句，会尝试赋值给已经存在的变量
            say `The value is ${value}`
        }
        say `The value is ${value}`
    }
    # 此处退出后，value的值会回到114514
    set global is_run = true
    say `The value is ${value}`
    goto chatbox
}