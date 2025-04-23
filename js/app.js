const hamburguesa = document.querySelector('.hamburguesa');
const navbar = document.querySelector('.navbar');

hamburguesa.addEventListener('click', ()=>{
    hamburguesa.classList.toggle('active')
    navbar.classList.toggle('active')
})
