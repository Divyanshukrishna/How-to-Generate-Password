let inp = document.querySelector("input");

let length = 12;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";

let number = "0123456789";

let symbol = "!@#$%^&*(){}?/";

let allchars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while(length > password.length){
        password += allchars[Math.floor(Math.random() * symbol.length)];
    }
    inp.value = password; 

}

function copyPassword(){
    inp.select();
    document.execCommand("copy");
}

