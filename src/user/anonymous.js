const user = require('index.js');
// returns true if mode is on, false if not
const mode = user.getMode()

// change username based on anonymous mode
const setAnonymousUsername = () => {
    const username = document.getElementById('show-username');
    if (username) {
        if (mode === 'true') {
            // set username to "anonymous" when anonymous mode is on
            username.textContent = 'anonymous';
        } else {
            // set username to original username
            username.textContent = username.getAttribute('data-username');
        }
    }
};

setAnonymousUsername();

// turn on anonymous mode if button is clicked
const anonymousButton = document.getElementById('anonymous-mode');
anonymousButton.addEventListener('click', function () {
    mode = (mode === 'anonymous') ? user.getMode() : 'anonymous';
    setAnonymousUsername(); // not sure if needed?
});