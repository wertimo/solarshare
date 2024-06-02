document.getElementById('waitlistForm').onsubmit = function(event) {
    event.preventDefault();
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for joining the waitlist!');
            document.getElementById('formModal').style.display = 'none';
        } else {
            alert('There was a problem submitting your form.');
        }
    });
};
