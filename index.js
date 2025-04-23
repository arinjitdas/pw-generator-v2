/*Individual character sets*/
const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specials = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let characters;

/*Boolean values for the character sets*/

let specialsInput = document.getElementById("checkbox-specials");
let numbersInput = document.getElementById("checkbox-numbers");

let specialsCheck = specialsInput.checked;
let numbersCheck = numbersInput.checked;

numbersInput.addEventListener("change", function() {
    numbersCheck = this.checked;
});

specialsInput.addEventListener("change", function() {
    specialsCheck = this.checked;
});


let passwordOneEl = document.getElementById("first-password");
let passwordTwoEl = document.getElementById("second-password");
let primaryButton = document.getElementById("btn-generate-password");
let lengthInput;

/*Element declarations for length error and inputField*/
const lengthError = document.getElementById("length-error");
const inputField = document.getElementById("length-input");


let passwordOneDiv = document.getElementById("first-password-container");
let passwordTwoDiv = document.getElementById("second-password-container");


primaryButton.addEventListener("click", function() {
    
    lengthInput = parseInt(inputField.value);
    characters = [...uppercase, ...lowercase];
    
    if (specialsCheck) {
        characters = characters.concat(specials)
    }
    
    if (numbersCheck) {
        characters = characters.concat(numbers)
    }
    
    if (!lengthInput) {
        lengthInput = 15;
        hideError();
        inputField.value = 15;
        passwordOneEl.textContent = randomPassword();
        passwordTwoEl.textContent = randomPassword();
        document.getElementById("character-count").textContent = characterCounter(lengthInput);
    }
    
    else if (lengthInput >= 7 && lengthInput <=22) {
        hideError();
        passwordOneEl.textContent = randomPassword();
        passwordTwoEl.textContent = randomPassword();
        document.getElementById("character-count").textContent = characterCounter(lengthInput);
    }
    
    else if (lengthInput > 22) {
        showError("Your password can't have more than 22 characters");
    }
    
    else if (lengthInput < 0) {
        showError("Please be a little positive. That's too much negativity!");
    }
    
    else if (lengthInput < 7) {
        showError("The password must have min. 7 characters");
    }
})


/*
---------------------------
FUNCTION DECLARATIONS BELOW
---------------------------
*/

function characterCounter(lengthInput) {
    let feedbackString = "Character count for password: " + lengthInput;
    return feedbackString;
}

/*Function to TRIGGER error states for input and show error message*/
function showError(message) {
    lengthError.textContent = message;
    lengthError.classList.add('has-error');
    inputField.classList.add('input-error');
}

/*Function to REMOVE error states for input and show error message*/
function hideError() {
    lengthError.textContent = "";
    lengthError.classList.remove("has-error");
    inputField.classList.remove("input-error");
}

function randomChar(characters) {
    const index = [Math.floor(Math.random() * characters.length)];
    return characters[index];
}

function randomPassword() {
    passwordString = "";
    for (let i = 0; i < lengthInput; i++) {
        passwordString += randomChar(characters);
    }
    return passwordString;
}


