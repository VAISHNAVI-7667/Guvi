// login.js
function validateForm() {
    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;
  
    // Basic validation
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
      return false;
    }
  
    // Additional validation logic if needed
  
    return true;
  }
  