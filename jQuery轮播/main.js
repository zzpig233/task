var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++){
    $(allButtons[i]).on('click', function(x){
        var index = $(x.currentTarget).index()
        var p = index * -300
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index
        activeButton(allButtons.eq(n))
    })
}

var n =0;
var size = allButtons.length
allButtons.eq(n % size).trigger('click')
    
var timerId = setTimer()

$('.window').on('mouseenter', function() {
    window.clearInterval(timerId)
})
$('.window').on('mouseleave', function() {
    timerId = setTimer()
})

function setTimer(){
    return setInterval(() =>{
        n += 1
        allButtons.eq(n % size).trigger('click')
    }, 2000)
}

function activeButton($button){
    $button.addClass('red').siblings('.red').removeClass('red')
}



<koji_m> great you came in man
<koji_m> I've been waiting 17 months 
<koji_m> to tell you you won't be reactivated
<koji_m> good stuff
<koji_m> you've been disabled for over a year + you're a cheating cunt
<koji_m> so yeah, rang rang