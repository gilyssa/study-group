function togglePassword(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    icon.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text';
            icon.src = './img/eyeOn.svg';
        } else {
            input.type = 'password';
            icon.src = './img/eyeOff.svg';
        }
    });
}

togglePassword('senha', 'showPassword');
togglePassword('confirmPassword', 'showPassword2');