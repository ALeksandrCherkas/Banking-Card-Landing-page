const burger = document.querySelector('.header__burger-menu');
const nav = document.querySelector('.header__navigation');
const closeBtn = document.querySelector('.header__navigation-closeBtn')
burger.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    bg.classList.toggle('active');
    
})

closeBtn.addEventListener('click', ()=>{
    nav.classList.toggle('active');
})


