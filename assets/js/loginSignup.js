function clicou () {
    let button = document.querySelector('.option_button');
    let signup = document.querySelector('.signup_page');
    let login = document.querySelector('.login_page');
    let titles = document.querySelector('.title_div');


    if (button.classList.contains ('option_button_right') == true ) {
        button.classList.remove ('option_button_right')
        button.classList.add ('option_button_left')
        signup.classList.remove ('right')
        login.classList.add ('left')
        login.style.animation = 'none';
        login.style.opacity = '0%';
        signup.style.opacity = '100%';
        signup.style.animation = 'toLeft 1s ease';
        titles.style.animation = 'fade 1s ease'
        button.innerHTML = 'Log in';
    } else if (button.classList.contains ('option_button_right') == false) {
        button.classList.add ('option_button_right')
        button.classList.remove ('option_button_left')
        signup.classList.add ('right')
        login.classList.remove ('left')
        login.style.animation = 'toRight 1s ease';
        signup.style.animation = 'none';
        login.style.opacity = '100%';
        signup.style.opacity = '0%';
        titles.style.animation = 'none';
        titles.style.animation = 'fade 1s ease';
        button.innerHTML = 'Register';
    } else {
        button.classList.add('option_button_right')
    }

}   