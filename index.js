let targetUl = document.querySelector('.navbar');
let menu = document.querySelector('.hamburger');

menu.addEventListener('click', ()=>{
    targetUl.classList.toggle('active-nav');
})