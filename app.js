let button = document.querySelector(".formSubmit");

button.addEventListener('click', (e)=>{
    e.preventDefault();
    
    let username = document.getElementById("username").value;
    let phone = document.getElementById("Phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let conformPassword = document.getElementById("conformPassword").value;

    // regular expressions
    let regexUsername = /^[A-Za-z ]{3,20}$/;
    let regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
    let regexEmail = /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let regexPhone = /^[6-9][\d]{9}$/;

    //clear previous error 
    document.querySelectorAll(".error").forEach((currEle)=>{
        currEle.textContent = "";
    })

    let isValid = true;

    if(!regexUsername.test(username)){
        document.getElementById('usernameError').textContent = "username is not valid";
        isValid = false;
    }

    if(!regexPassword.test(password)){
        document.getElementById('passwordError').textContent = "password must be at least 8 characters and include at least on euppercase letter, one lowercase letter, one number, and one special character.";
        isValid = false;
    }

    if(!regexEmail.test(email)){
        document.getElementById('emailError').textContent = "please enter a valid email address";
        isValid = false;
    }

    if(!regexPhone.test(phone)){
        document.getElementById('phoneError').textContent = "please enter a valid email address";
        isValid = false;
    }

    // validate confirm password 
    if(password!==conformPassword){
        document.getElementById('conformPasswordError').textContent = "password is not matching";
        isValid = false;
    }

    let userData = [];

    if(isValid) {
        let formClass = document.getElementsByClassName("form-control");
        Array.from(formClass).forEach((currEle)=>{
            userData.push(currEle.value);
            currEle.value = "";
        })
        console.log(userData);
        alert("Registration Successful");
    }
})

   