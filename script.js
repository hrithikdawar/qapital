document.querySelectorAll(".relative").forEach(function(menu){
    menu.addEventListener('mouseenter',()=>{
        menu.querySelector('div').classList.remove('hidden')
        
       

    })
    menu.addEventListener('mouseleave',()=>{
        menu.querySelector('div').classList.add('hidden')
    })
})
document.querySelector('.mn').forEach (function(nav){
    nav.addEventListener('mouseenter',()=>{
        nav.querySelector('nav').classList.add('.mn')
    })


}) 