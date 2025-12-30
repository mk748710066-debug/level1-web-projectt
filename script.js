 function showMessage() {
    document.getElementById("msg").innerHTML =
    "Hello! JavaScript is working successfully.";
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name == "" || email == "") {
        document.getElementById("error").innerHTML =
        "Please fill all fields";
    } else {
        document.getElementById("error").innerHTML =
        "Form submitted successfully!";
    }
}