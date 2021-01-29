function validateForm(){
    let username = document.getElementById("enterName");
    let usererr = document.getElementById("nameInfo");
    let mail = document.getElementById("enterEmail");
    let mailerr = document.getElementById("emailInfo");
    let pass = document.getElementById("enterPass");
    let pass1 = document.getElementById("passInfo");
    let repass = document.getElementById("enterrePass");
    let repass1 = document.getElementById("passInfo1");

    if(username.value == ""){
        usererr.innerHTML = "Entry name is mandatory.";
        usererr.style.color = "red"
        username.style.border = "2px solid red";
        return false;
    }else if(mail.value == ""){
        mailerr.innerHTML = "Enter Email is mandatory.";
        mailerr.style.color = "red";
        mail.style.border = "2px solid red";
        return false;
    }else if(pass.value == ""){
        pass1.innerHTML = "Password should be enter here.";
        pass1.style.color = "red";
        pass.style.border = "2px solid red";
        return false;
    }else if(repass.value == ""){
        repass1.innerHTML = "Confirm passsword should be enter";
        repass1.style.color = "red";
        repass.style.border = "2px solid red";
        return false;
    }else if(pass.value !== repass.value){
        repass1.innerHTML = "Confirm password should be match with password"
        repass1.style.color = "red";
        repass.style.border = "2px solid red";
        return false;
    }else{
        return true;
    };
};

function checkName(){
    let username = document.getElementById("enterName");
    let usererr = document.getElementById("nameInfo");
    
    if(username !== ""){
        username.style.border = "";
        usererr.innerHTML = "";
    };
};

function checkEmail(){
    let mail = document.getElementById("enterEmail");
    let mailerr = document.getElementById("emailInfo");

    if(mail.value !== ""){
        mail.style.border = "";
        mailerr.innerHTML = "";
    };
};

function checkPass(){
    let pass = document.getElementById("enterPass");
    let pass1 = document.getElementById("passInfo");

    if(pass !== ""){
        pass.style.border = "";
        pass1.innerHTML = "";
    };
};

function checkRepass(){
    let pass = document.getElementById("enterPass");
    let repass = document.getElementById("enterrePass");
    let repass1 = document.getElementById("passInfo1");

    if(repass !== ""){
        repass.style.border = "";
        repass1.innerHTML = "";
    };
};
