function funktion() {
            var userName = "Vezel";
            var userPass = "password";
            var userAge = "16";
            var userReg;
            
            userReg = prompt("Do you want to register? Yes/No");
            if (userReg == "Yes" || userReg == "yes") {
                userName = prompt("Enter a username: ");
                userPass = prompt("Enter a password: ");
                userAge = prompt("Enter your age: ");
                
                alert("Please login!");
                var tempName = prompt("Username: ");
                var tempPass = prompt("Password: ");
                if (tempName === userName && tempPass === userPass) {
                    alert("Welcome back " + userName + "!");
                }else {
                    alert("Wrong username or password.");
                }
                
            }else if (userReg == "No" || userReg == "no") {
                alert("Please login!");
                var tempName = prompt("Username: ");
                var tempPass = prompt("Password: ");
                if (tempName === userName && tempPass === userPass) {
                    alert("Welcome back " + userName + "!");
                }else {
                    alert("Wrong username or password.");
                }
            
            }else {
                alert("Write Yes or No.");
            }
            }