constance{
    name := "Ruby"
    version := "1.0.0"
    author := "Yukihiro Matsumoto"
}

hello{
    say "接下来，我们来展示菜单的用法"
    say "输入menu开始菜单测试，输入exit退出"
    goto chatbox
}

chatbox{
    "menu" => {
        goto Main_Menu
    }
    "exit" => {
        say "Goodbye!"
        exit
    }
    default => {
        say "I don't understand."
    }
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