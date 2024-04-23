const wrapper = document.querySelector('.wrapper')
const btnPopup = document.querySelector('.btnlogin-popup')

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup')
})