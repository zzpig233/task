myButton.addEventListener('click', (e) => {
    let request = new XMLHttpRequest() //实例化XMLHttpRequest对象

    request.open('GET', 'http://jack.com:8001/xxx') //配置request
    request.send()
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('请求和响应都完毕了')
            console.log('state=')
            console.log(request.status) // 0
            if (request.status >= 200 && request.status <= 300) {
                console.log('说明请求成功了')
                console.log(typeof request.responseText)
                console.log(request.responseText)
                let string = request.responseText
                let json = window.JSON.parse(string)
                //把符合json语法的字符串转换成js对应的值
                console.log(typeof json)
                console.log(json)
                console.log('json.note = ')
                console.log(json.note)
                console.log('json.note.to = ')
                console.log(json.note.to)

            } else if (request.status >= 400) {
                console.log('说明请求失败了')

            }
        }
    }


    // console.log(request.readyState)
})