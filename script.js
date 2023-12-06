let form = document.querySelector(".form")
let email = document.getElementById("mail")
let password = document.getElementById("pass")
let cpassword = document.getElementById("word")
let login = document.getElementById("login")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    validate()
})

function validate(){
    let emailval = email.value 
    let passvalue = password.value 
    let cpassvalue = cpassword.value

    if(emailval == ''){
        defeat(email, 'Email is required')
    }
    else if(!mailchk){
        defeat(email, 'Please enter valid email')
    }
    else{
        victory(email)
    }

    if(passvalue == ''){
        defeat(password, 'Password is required')
    }
    else if(passvalue.length<8){
        defeat(password, 'Passwor should be atleast 8 characters')
    }
    else{
        victory(password)
    }

    if(cpassvalue == ''){
        defeat(cpassword, 'Confirm password is required')
    }
    else if(cpassvalue != passvalue){
        defeat(cpassword, 'Password does not match')
    }
    else{
        victory(cpassword)
    }

}

function defeat(element,message){
    let err = element.parentElement;
    let error = err.querySelector(".error")
    error.innerHTML = message;
    err.classList.add("error")
    err.classList.remove("success")
}

function victory(element){
    let err = element.parentElement;
    let error = err.querySelector(".error")
    error.innerHTML = '';
    err.classList.add("success")
    err.classList.remove("error")
}

let mailchk = (email) => {
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}