# 以下为所设计的用于特定领域语言的语法
constance{
    name := "Ruby"
    version := "1.0.0"
    author := "Yukihiro Matsumoto"
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
}

topic version{
    say `My version is ${version}`
    goto chatbox
}
topic Welcome{
    say `Hello, I am ${name} version ${version}`
    say `I was created by ${author}`
    say "How can I help you?"
    goto Main_Menu
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
