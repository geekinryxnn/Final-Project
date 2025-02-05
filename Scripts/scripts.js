
document.anchor.addEventListener('click', function (e) {
        e.preventDefault();

    
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });


document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    const contactForm = document.querySelector('.contact-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = loginForm.querySelector('input[name="username"]').value;
            const password = loginForm.querySelector('input[name="password"]').value;

            if (username === '' || password === '') {
                alert('Please fill in all fields.');
            } else {
                
                loginForm.submit();
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = signupForm.querySelector('input[name="username"]').value;
            const email = signupForm.querySelector('input[name="email"]').value;
            const password = signupForm.querySelector('input[name="password"]').value;
            const confirmPassword = signupForm.querySelector('input[name="confirm_password"]').value;

            if (username === '' || email === '' || password === '' || confirmPassword === '') {
                alert('Please fill in all fields.');
            } else if (password !== confirmPassword) {
                alert('Passwords do not match.');
            } else {
                
                signupForm.submit();
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
            } else {
                
                contactForm.submit();
            }
        });
    }
});
