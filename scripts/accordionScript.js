const accordionItems = document.querySelectorAll('.faq__accordion-item');

accordionItems.forEach(item => {
    const heading = item.querySelector('.faq__accordion-block');
    const content = item.querySelector('.faq__accordion-content');
    const plus = item.querySelector('.faq__accordion-plus');
    
    heading.addEventListener('click', ()=>{
        content.classList.toggle('active')
        item.classList.toggle('active')
        plus.textContent === '+' ? plus.textContent = '-' : plus.textContent = '+';
    })
})