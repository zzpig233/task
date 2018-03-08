let n
init()
setInterval(()=>{
    makeLeave(getImage(n)).one('transitionend', (e)=>{
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
    n +=1
},3000)

function getImage(n){
    return $(`.images > img:nth-child(${x(n)})`)
}
function x(n){
    if(n>5){
        n = n%5
        if (n===0){
            n=5
        }
    }
    return n
}
function init(){
    n =1
    getImage(n).addClass('current').siblings().addClass('enter')
}
function makeCurrent($node){
    return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
    return $node.removeClass('current enter').addClass('leave')
}
function makeEnter($node){
    return $node.removeClass('levae current').addClass('enter')
}