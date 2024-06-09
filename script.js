
// const supabaseUrl = 'https://bxcliaujryahksdpbewc.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4Y2xpYXVqcnlhaGtzZHBiZXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5NTQ1NjQsImV4cCI6MjAzMzUzMDU2NH0.jMqHXkcGoDBvb0vW0aP9OyGcYndPHCu5EnNIwzFwKKQ';


// Initialize Supabase
const supabaseUrl = 'https://bxcliaujryahksdpbewc.supabase.co'';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4Y2xpYXVqcnlhaGtzZHBiZXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5NTQ1NjQsImV4cCI6MjAzMzUzMDU2NH0.jMqHXkcGoDBvb0vW0aP9OyGcYndPHCu5EnNIwzFwKKQ';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

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

// Form submission
document.getElementById('waitlistForm').onsubmit = async function(event) {
    event.preventDefault();
    console.log('Form submission started.');

    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    console.log('Form data:', { firstName, email, phone });

    try {
        const { data, error } = await supabase
            .from('waitlist')
            .insert([
                { first_name: firstName, email: email, phone_number: phone }
            ]);

        if (error) {
            throw error;
        } else {
            alert('Thank you for joining the waitlist!');
            formModal.style.display = 'none';
            console.log('Form submitted successfully.');
        }
    } catch (error) {
        alert('There was a problem submitting your form.');
        console.error('Error submitting form:', error);
    }
};
