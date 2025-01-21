
    function validateForm() {
        const number = document.getElementById("number").value;
        const age = parseInt(document.getElementById("age").value);
        const mail = document.getElementById("mail").value;

        
        // Validate number (must be exactly 10 digits)
        if (!/^\d{10}$/.test(number)) {
            alert("Number must be exactly 10 digits.");
            return false;
        }

        // Validate age (must be greater than 18)
        if ( age <= 18) {
            alert("Age must be greater than 18.");
            return false;
        }

        // Validate email (must end with @gmail.com)
        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(mail)) {
            alert("Email must be a valid Gmail address (ending with @gmail.com).");
            return false;
        }


        return true; // Allow form submission if all validations pass
    }
