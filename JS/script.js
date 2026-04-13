function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    if (email !== "" && password !== "") {
        alert("Login Successful! Welcome to Mind Bridge.");
        window.location.href = "dashboard.html";
    } else {
        alert("Please enter both email and password.");
    }
}
function sendMessage() {
    const name = document.getElementById('name').value;
    if(name) {
        alert("Thank you " + name + ", your message has been sent to the Mind Bridge team.");
    }
}
function registerUser() {
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;


    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }


    if (username && email && password) {
        
        alert("Registration Successful! Welcome, " + username + ". You can now login.");
        
        
        window.location.href = "login.html";
    } else {
        alert("Please fill in all fields.");
    }
}