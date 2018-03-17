function f1(responseText) {}
function f2(responseText) {}
myButton.addEventListener('click', (e) => {
    $.ajax({
      url: '/xxx',
      type: 'GET',
    }).then(
      (responseText) => {
        console.log(responseText)
        return responseText
      },
      (request) => {
        console.log('error')
        return '已经处理'
      }
    ).then(
      (responseText) => {
        console.log(responseText)
      },
      (request) => {
        console.log(error2)
      }
    )

})