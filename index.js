const menuBtn = document.querySelector('.humburger')
const menu = document.querySelector('.nav--menu')

menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('show')
})