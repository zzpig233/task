window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function () { }
    nodes.html = function () { }
    return nodes
}

window.jQuery.ajax = function (options) {
    学习jQuery可以传两中类型的参数
    let url
    if (arguments.length === 1) {
        url = options.url
    } else if (arguments.length === 2) {
        url = arguments[0]
        options = arguments[1]
    }

    let method = options.method
    let headers = options.headers
    let body = options.body
    let successFn = options.successFn
    let failFn = options.failFn

    let request = new XMLHttpRequest() //实例化XMLHttpRequest对象
    request.open(method, url)
    for (let key in headers) {
        let value = headers[key]
        request.setRequestHeader(key, value)
    }
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                successFn.call(undefined, request.responseText)
            } else if (request.status >= 400) {
                failFn.call(undefined, request)
            }
        }
    }
    request.send(body)
}

window.$ = window.jQuery

function f1(responseText) { }
function f2(responseText) { }
myButton.addEventListener('click', (e) => {

    window.jQuery.ajax({
        url: '/xxxttt',
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'wushao': '18'
        },
        body: 'a=1&b=6',
        successFn: (x) => {
            f1.call(undefined, x)
            f2.call(undefined, x)
        },
        failFn: (x) => {
            console.log(x)
            console.log(x.status)
            console.log(x.responseText)
        }
    })
})