let users = [
    {
        User_ID: "1",
        Username: "patient_001",
        Password: "password_hash1",
        username: "user1"
    },
    {
        User_ID: "2",
        Username: "patient_002",
        Password: "password_hash2",
        username: "user2"
    },
    {
        User_ID: "3",
        Username: "patient_003",
        Password: "password_hash3",
        username: "user3"
    },
    {
        User_ID: "4",
        Username: "patient_004",
        Password: "password_hash4",
        username: "user4"
    }
];

// Handle the login form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim(); // Trimmed username
    const password = document.getElementById('password').value.trim(); // Trimmed password
    const errorMessage = document.getElementById('errorMessage'); // Get the error message element

    // Authenticate user
    const user = users.find(user => user.username === username && user.Password === password);

    if (user) {
        window.open('index.html', '_blank'); // Open in a new tab on success
    } else {
        errorMessage.style.display = 'block'; // Show error message
    }
});

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    const newUsername = document.getElementById('newUsername').value.trim(); // Trimmed new username
    const newPassword = document.getElementById('newPassword').value.trim(); // Trimmed new password

    // Check if the username already exists
    const existingUser = users.find(user => user.username === newUsername);

    if (existingUser) {
        alert('Username already exists. Please choose a different one.'); // Alert if username exists
    } else {
        // Add new user to the users array
        const newUser = {
            User_ID: (users.length + 1).toString(),
            Username: `patient_00${users.length + 1}`,
            Password: newPassword, // In a real application, hash the password
            username: newUsername
        };
        users.push(newUser);
        alert(`Account created successfully for ${newUsername}`); // Alert on successful account creation

        // Optionally clear the form fields after submission
        document.getElementById('newUsername').value = '';
        document.getElementById('newPassword').value = '';

        // Optionally, toggle back to the login form
        toggleForms();
    }
});

// Toggle between login and signup forms
document.getElementById('showSignup').addEventListener('click', toggleForms);
document.getElementById('showLogin').addEventListener('click', toggleForms);

function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
}

// Password visibility toggle for login form
const togglePasswordLogin = document.getElementById('togglePassword');
const passwordInputLogin = document.getElementById('password');

togglePasswordLogin.addEventListener('click', function () {
    const type = passwordInputLogin.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInputLogin.setAttribute('type', type);
    togglePasswordLogin.textContent = type === 'password' ? 'visibility_off' : 'visibility';
});
