const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15
let passwordEl = document.getElementById("password-el")
let passwordEl2 = document.getElementById("password-el2")
let copied = document.getElementById("copied-el")

// Generates the random character value
function getRandomChar() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

// Calls the string of random characters
function callPasswordOne() {
    let passwordOne = ""
    let passwordTwo = ""
    for (i = 0; i < passwordLength; i++) {
         passwordOne += getRandomChar()
         passwordTwo += getRandomChar()
    }
     passwordEl.textContent = passwordOne
     passwordEl.value = passwordOne
     
     passwordEl2.textContent = passwordTwo
     passwordEl2.value = passwordTwo
}

function copyText() {
    let copyText = document.getElementById("password-el")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand('copy')
    console.log("")
    copyText.value = "Copied!"
}


function copyText2() {
    let copyText = document.getElementById("password-el2")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand('copy')
    console.log("")
    copyText.value = "Copied!"
}