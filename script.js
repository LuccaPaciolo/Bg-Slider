const navBar = document.querySelector('.navbar-container')
const bottomContainer = document.querySelector('.bottom-container')



window.addEventListener ("scroll", ()=> {
    if (window.scrollY > bottomContainer.offsetTop - navBar.offsetHeight - 50 ) {
        navBar.classList.add ('active')
    } else {
        navBar.classList.remove('active')
    }
    
})