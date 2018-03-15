clickMe.addEventListener('click', function(e){
    if(popover.style.display === 'block'){
        popover.style.display = 'none'
    }else{
        popover.style.display = 'block'
    }
    
})
wrapper.addEventListener('click', function(e){
    e.stopPropagation()
})
document.addEventListener('click', function(){
    popover.style.display = 'none'
})
