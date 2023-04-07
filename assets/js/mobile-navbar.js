var ul = document.querySelector('.nav_ul ul');
var menuBtn = document.querySelector('.mobile_menu');

function menuShow() {
    if(ul.classList.contains('open')) {
        ul.classList.remove ('open');
    } else{
        ul.classList.add ('open');
    }
}