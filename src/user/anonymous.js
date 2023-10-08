// turn on anonymous mode if button is clicked
const anonymousButton = document.getElementById('anonymous-mode');
anonymousButton.addEventListener('click', function () {
    mode = (mode === 'anonymous') ? user.getMode() : 'anonymous';
    setAnonymousUsername(); // not sure if needed?
});