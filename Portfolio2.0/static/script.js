/* Abre e fecha menu lateral em modo mobile */

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () =>{
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x") /* Esse codigo faz alterar o icone */
    : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
})


/* Fecha o menu quano clicar em algum item e muda o icone para list */

const navItem = document.querySelectorAll('.nav-item');

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active");
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})

