const toggle_mode = document.getElementById('toggle_mode')
const body = document.querySelector('body')
const header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')

/*toggle_mode.onclick = function(){
    toggle_mode.classList.toggle('active')
    body.classList.toggle('active')
    header.classList.toggle('active')
    main.classList.toggle('active')
    footer.classList.toggle('active')
}*/

toggle_mode.onchange = function(){
    toggle_mode.classList.toggle('active')
    body.classList.toggle('active')
    header.classList.toggle('active')
    main.classList.toggle('active')
    footer.classList.toggle('active')
}

/*
const body = document.querySelector('body')
const toggle = document.getElementById('toggle')
toggle.onclick = function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')
}
*/