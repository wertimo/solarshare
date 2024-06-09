// Initialize Supabase
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Modal functionality
const joinWaitlistButton = document.getElementById('joinWaitlistButton');
const formModal = document.getElementById('formModal');
const closeModal = document.getElementById('closeModal');

joinWaitlistButton.onclick = function() {
    formModal.style.display = 'flex';
}

closeModal.onclick = function() {
    formModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === formModal) {
        formModal.style.display = 'none';
    }
}

// Form submission
document.getElementById('waitlistForm').onsubmit = async function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const { data, error } = await supabase
        .from('waitlist')
        .insert([
            { first_name: firstName, email: email, phone_number: phone }
        ]);

    if (error) {
        alert('There was a problem submitting your form.');
        console.error(error);
    } else {
        alert('Thank you for joining the waitlist!');
        formModal.style.display = 'none';
    }
};
