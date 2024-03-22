// signup.js
function validateForm() {
    var name = document.querySelector('input[name="name"]').value;
    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;
  
    // Basic validation
    if (name.trim() === "" || username.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields.");
      return false;
    }
  
    // Additional validation logic if needed
  
    return true;
  }
  