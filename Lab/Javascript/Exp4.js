console.log("JS Loaded");
function FormValidation()
{
    let name = document.getElementById('Name').value;
    let email = document.getElementById('Email').value;
    let password = document.getElementById('password').value;

    document.getElementById('nameError').innerHTML= "";
    document.getElementById('emailError').innerHTML= "";
    document.getElementById('passwordError').innerHTML= "";

    let isValid = true;

    if(name === "")
    {
        document.getElementById('nameError').innerHTML= "Name field is required";
        isValid = false;
    }

    if(email === "")
    {
        document.getElementById('emailError').innerHTML= "Email is required";
        isValid = false;
    }
    else if(!email.includes('@'))
    {
        document.getElementById('emailError').innerHTML= "Email must contain @";
        isValid = false;
    }

    if(password === "")
    {
        document.getElementById('passwordError').innerHTML= "Password is required.";
        isValid = false;
    }
    else if(password.length < 8)
    {
        document.getElementById('passwordError').innerHTML= "Password must be at least 8 characters.";
        isValid = false;
    }

    if(isValid)
    {
        alert("Form submitted Successfully.");
        return true;
    }
    else
    {
        return false;
    }
}