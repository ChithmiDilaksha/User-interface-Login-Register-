// Password toggle functionality
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('bxs-lock-open');
});

// Header visibility functionality
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    document.addEventListener('mousemove', function(event) {
        if (event.clientY < 70) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    });
});



/*-----------Header hide & display-------------*/
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    document.addEventListener('mousemove', function(event) {
        if (event.clientY < 70) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    });
});
/*------------------------*/

