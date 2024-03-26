const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signup-link');
const signInLink = document.querySelector('.signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signin');
    wrapper.classList.remove('animate-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signup');
    wrapper.classList.remove('animate-signin');
});