hello {
    say "下面会进行Json和数组访问的演示"
    say "输入json进入json演示"
    say "输入array进入array演示"
    say "输入exit退出"
    goto chatbox
}

chatbox {
    "json" => {
        say "下面是json演示"
        say "输入exit退出"
        goto json
    }
    "array" => {
        say "下面是array演示"
        say "输入exit退出"
        goto array
    }
    "exit" => {
        say "再见"
        exit
    }
}

topic json {
    set obj := {
        "name": "hello",
        "age": 18,
        "hobby": ["basketball", "football", "swimming"]
    }
    say "obj.name = " + obj.name
    say "obj.age = " + obj.age
    say "obj.hobby[0] = " + obj.hobby[0]
    say "obj.hobby[1] = " + obj.hobby[1]
    say "obj.hobby[2] = " + obj.hobby[2]
    goto chatbox
}

topic array {
    set arr := ["hello", "world", "bye"]
    say "arr[0] = " + arr[0]
    say "arr[1] = " + arr[1]
    say "arr[2] = " + arr[2]
    goto chatbox
}
