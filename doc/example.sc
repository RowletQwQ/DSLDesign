# 以下为所设计的用于特定领域语言的语法
constance{
    name := "Ruby"
    version := "1.0.0"
    author := "Yukihiro Matsumoto"
}

hello{
    say "Hello, world!"
    set global is_run := false
    goto Welcome
}

chatbox{
    "Hello" => {
        say "Hello, how are you?"
    }
    "What is your name?" => {
        goto name
    }
    "What is your version?" => {
        goto version
    }
    "Let's chat" => {
        goto Main_Menu
    }
    "exit" => {
        say "Goodbye!"
        exit
    }
    "calculate" => {
        say "Please input your expression:"
        goto calculate
    }
    "looping" => {
        goto looping
    }
    "start" => {
        say "让我们来试试match吧"
        goto Main_Menu
    }
    "field" => {
        say "让我们来试试field吧"
        if (is_run) => {
            say "field已经运行过了"
        }
        goto field
    }
    "print json" => {
        say "Here is a json:"
        goto json
    }
    default => {
        say "Sorry, I don't understand."
    }    
}

topic field {
    set value := 114514
    say `The value is ${value}`
    if ( value = 114514) => {
        set value := 1919810
        say `The value is ${value}`
        if ( value = 1919810) => {
            set value = "suka"
            say `The value is ${value}`
        }
        say `The value is ${value}`
    }
    set global is_run = true
    say `The value is ${value}`
    goto chatbox
}

topic json {
    set json := {
        "name": "Ruby",
        "version": "1.0.0",
        "author": "Yukihiro Matsumoto"
    }
    say `My name is ${json.name}`
    say `My version is ${json.version}`
    say `My author is ${json.author}`
    goto chatbox
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
        set i = i + 1
    }
    goto chatbox
}

topic calculate {
    say "Please input val1:"
    input val1
    say "Please input val2:"
    input val2
    say `The result of addition is ${val1 + val2}`
    say `The result of subtraction is ${val1 - val2}`
    say `The result of multiplication is ${val1 * val2}`
    say `The result of division is ${val1 / val2}`
    goto chatbox
}
topic version{
    say `My version is ${version}`
    goto chatbox
}
topic Welcome{
    say `Hello, I am ${name} version ${version}`
    say `I was created by ${author}`
    say "How can I help you?"
    goto chatbox
}

topic name{
    say `My name is ${name}`
    goto chatbox
}

topic Main_Menu{
    menu{
        "What is your name?" => {
            say `My name is ${name}`
            goto Main_Menu
        }
        "What is your version?" => {
            say `My version is ${version}`
            goto Main_Menu
        }
        "Who is your author?" => {
            say `My author is ${author}`
            goto Main_Menu
        } 
        "Exit" => {
            say "Goodbye!"
            exit
        }
    }
}
