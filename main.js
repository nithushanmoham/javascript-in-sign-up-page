
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "nithushan" && password === "nithu123") {
        this.submit();
    } else {
        alert("Invalid username or password. Please try again.");
        document.getElementById("username").value = ""; 
        document.getElementById("password").value = ""; 
    }
});