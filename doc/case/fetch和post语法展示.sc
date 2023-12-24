hello {
    say "输入fetch测试fetch功能，获取北京天气"
    say "输入POST测试POST功能"
    goto chatbox
}

chatbox {
    "fetch" => {
        say "北京天气"
        goto weather
    }
    "post" => {
        say "POST测试"
        goto test_post
    }
    "exit" => {
        say "再见"
        exit
    }
    default => {
        say "未知指令"
        goto chatbox
    }
}

topic test_post {
    set json := {
        "name": "Daming",
        "You": 56
   }
    post json => "http://localhost:8080/api/test"
    say `POST成功, 返回${json}`
    goto chatbox
}

topic weather {
    say "请输入高德地图的API_KEY"
    input api_key
    fetch `https://restapi.amap.com/v3/weather/weatherInfo?city=110101&key=${api_key}` => result
    say result
    goto chatbox
}