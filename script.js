document.getElementById('joinWaitlistButton').onclick = function() {
    document.getElementById('formModal').style.display = 'flex';
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('formModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('formModal')) {
        document.getElementById('formModal').style.display = 'none';
    }
}

document.getElementById('waitlistForm').onsubmit = function(event) {
    event.preventDefault();
    alert('Thank you for joining the waitlist!');
    document.getElementById('formModal').style.display = 'none';
}
