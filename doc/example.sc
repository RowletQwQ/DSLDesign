# 以下为所设计的用于特定领域语言的语法
constance{
    name := "Ruby"
    version := "1.0.0"
    author := "Yukihiro Matsumoto"
}

hello{
    say "Hello, world!"
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
    default => {
        say "Sorry, I don't understand."
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
