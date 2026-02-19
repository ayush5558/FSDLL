document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let gender = document.getElementById("gender").value;
    let message = document.getElementById("message").value.trim();

    let valid = true;

    // Clear previous messages
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.getElementById("successMsg").textContent = "";

    // Validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Name required";
        valid = false;
    }

    if (email === "" || !email.includes("@")) {
        document.getElementById("emailError").textContent = "Valid email required";
        valid = false;
    }

    if (phone.length !== 10) {
        document.getElementById("phoneError").textContent = "Enter 10 digit phone";
        valid = false;
    }

    if (gender === "") {
        document.getElementById("genderError").textContent = "Select gender";
        valid = false;
    }

    // If all validations pass
    if (valid) {
        document.getElementById("successMsg").textContent =
            "Form submitted successfully ✅";

        let result = document.getElementById("result");
        result.style.display = "block";

        result.innerHTML = `
            <h3>Submitted Details</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Gender:</b> ${gender}</p>
            <p><b>Message:</b> ${message}</p>
        `;

        document.getElementById("myForm").reset();
    }
});
