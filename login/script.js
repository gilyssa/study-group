const passwordInput = document.getElementById('senha');
const eyeIcon = document.getElementById('showPassword');

eyeIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.src = 'login/img/eyeOn.svg';
    } else {
        passwordInput.type = 'password';
        eyeIcon.src = 'login/img/eyeOff.svg';
    }
});

const forgetPassword = document.querySelector('.esqueceu-senha');

forgetPassword.addEventListener('click', () => {
    window.alert("Página em desenvolvimento");
});
