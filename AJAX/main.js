myButton.addEventListener('click', (e) => {
    let request = new XMLHttpRequest() //实例化XMLHttpRequest对象

    request.open('POST', '/xxx') //配置request 请求的第一部分
    request.setRequestHeader('Content-Type', 'x-www-form-urlencoded')//请求的第二部分
    request.setRequestHeader('wushao', '18')//请求的第二部分
    // request.send('我要设置请求的第四部分')
    request.send('name=wushao&password=wushao')//请求的第四部分
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('请求和响应都完毕了')
            console.log('state=')
            console.log(request.status) //响应的第一部分
            console.log('request.statusText = ')
            console.log(request.statusText) //响应的第一部分
            if (request.status >= 200 && request.status <= 300) {
                console.log('说明请求成功了')
                console.log(request.getAllResponseHeaders())//响应的第二部分
                console.log(request.getResponseHeader('Content-Type'))//响应的第二部分
                console.log(typeof request.responseText)
                console.log(request.responseText)
                console.log(request.responseText)//响应的第四部分
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