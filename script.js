// Event Listener to Toggle Background Color
const toggleColorBtn = document.getElementById('toggleColorBtn');
let isBackgroundWhite = true;

toggleColorBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = isBackgroundWhite ? '#f0f0f0' : '#ffffff';
    isBackgroundWhite = !isBackgroundWhite;
});

// Slider to Adjust Text Size
const textSizeSlider = document.getElementById('textSizeSlider');
const textElement = document.getElementById('text');

textSizeSlider.addEventListener('input', function() {
    textElement.style.fontSize = `${textSizeSlider.value}px`;
});

// Modal: Open and Close Modal
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Form Validation
const signupForm = document.getElementById('signupForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

signupForm.addEventListener('submit', function(event) {
    let valid = true;

    // Name Validation
    if (nameField.value.trim().length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(emailField.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password Validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(passwordField.value.trim())) {
        passwordError.textContent = "Password must be at least 8 characters, one uppercase letter, and one number.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    // Prevent form submission if validation fails
    if (!valid) {
        event.preventDefault();
    }
});

// Bonus: Dropdown Menu
const dropdown = document.getElementById('dropdown');
const dropdownMessage = document.getElementById('dropdownMessage');

dropdown.addEventListener('change', function() {
    const selectedOption = dropdown.value;
    if (selectedOption) {
        dropdownMessage.textContent = `You selected: ${selectedOption}`;
    } else {
        dropdownMessage.textContent = '';
    }
});
