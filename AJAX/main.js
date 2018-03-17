myButton.addEventListener('click', (e) => {
    let request = new XMLHttpRequest() //实例化XMLHttpRequest对象
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('请求和响应都完毕了')

            if (request.status >= 200 && request.status <= 300) {
                console.log('说明请求成功了')
                console.log(request.responseText)
            } else if (request.status >= 400) {
                console.log('说明请求失败了')

            }
        }

    }
    request.open('GET', '/xxx') //配置request
    request.send()
    // console.log(request.readyState)
})