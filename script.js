// Modal functionality
const joinWaitlistButton = document.getElementById('joinWaitlistButton');
const formModal = document.getElementById('formModal');
const closeModal = document.getElementById('closeModal');

joinWaitlistButton.onclick = function() {
    formModal.style.display = 'flex';
    console.log('Join Waitlist button clicked, opening modal.');
}

closeModal.onclick = function() {
    formModal.style.display = 'none';
    console.log('Close button clicked, closing modal.');
}

window.onclick = function(event) {
    if (event.target === formModal) {
        formModal.style.display = 'none';
        console.log('Clicked outside modal, closing modal.');
    }
}
