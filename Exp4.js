function submitButtonClick()
{
    //get values using DOM
    let name = document.getElementById('Name').value;
    let email = document.getElementById('Email').value;
    let passwrod = document.getElementById('password').value;

    //clear old messege
    document.getElementById('nameError').innerHTML= "";
    document.getElementById('emailError').innerHTML= "";
    document.getElementById('passwordError').innerHTML= "";

    let isValid = true;

    //Name validation
    if(name == "")
    {
        document.getElementById('nameError').innerHTML= "Name field is required";
        isValid = false;
    }
    if(email =="")
    {

        document.getElementById('emailError').innerHTML= "email is required";
        isValid = false;
    }
    else if(email.includes('@')){
        document.getElementById('emailError').innerHTML= "@ is required.";
        isValid = false;

    }

    if(passwrod = "")
    {
        document.getElementById('passwordError').innerHTML= "Password is required.";
        isValid = false;
    }
    else if(passwrod.length<=8)
    {
        document.getElementById('passwordError').innerHTML= "Password Must be of 8 characters .";
        isValid = false;
    }
}