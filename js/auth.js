// DOM Elements
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".material-symbols-outlined");
const passwordToggle = document.getElementById("passwordToggle");
const eyeIcon = document.getElementById("eyeIcon");
const passwordInput = document.getElementById("password");
const loginForm = document.getElementById("loginForm");

// Toggle password visibility
function togglePasswordVisibility() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.textContent = "visibility";
  } else {
    passwordInput.type = "password";
    eyeIcon.textContent = "visibility_off";
  }
}

// Toggle theme between light and dark
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  // Update the theme icon
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.textContent = "light_mode";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.textContent = "dark_mode";
    localStorage.setItem("theme", "light");
  }
}

// Check for saved theme preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeIcon.textContent = "light_mode";
}

// Event Listeners
themeToggle.addEventListener("click", toggleTheme);
passwordToggle.addEventListener("click", togglePasswordVisibility);

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple validation
  if (username && password) {
    // Check if user exists in localStorage (from signup)
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (username === storedEmail && password === storedPassword) {
      alert("Login successful! Redirecting to dashboard...");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials. Please try again or sign up.");
    }
  } else {
    alert("Please fill in all fields");
  }
});
