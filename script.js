let toggle = document.querySelector('.toggle');
let menu = document. querySelector('.menu');
let user = document.querySelector('.user');
let card = document.querySelector('.card');

user.addEventListener('click', function(){
    card.classList.toggle('active');
})

toggle.onclick = function(){
    menu.classList.toggle('active');
}