'use strict';

const user = require('.');

let document;
// returns true if mode is on, false if not
let mode;
mode = user.getMode();

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
anonymousButton.addEventListener('click', () => {
    mode = (mode === 'anonymous') ? user.getMode() : 'anonymous';
    setAnonymousUsername();
});
