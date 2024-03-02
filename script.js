const inputSlider =  document.querySelector("data-lenghtslider");
const lengthDisplay = document.querySelector("data-lenghtNumber");
const passwordDisplay = document.querySelector("data-passowrdDisplay");
const coptBtn = document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[datacopyMsg]");
const upperCaseCheck = document.querySelector("#upperCase");
const lowerCaseCheck = document.querySelector("#lowecase");
const numberCaseCheck = document.querySelector("#numbers");
const symbolsCaseCheck = document.querySelector("#symbols");
const indicater = document.querySelector(" data-indicator");
const gererateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll(".input[type=check]");

let password ="";
let passowrdLength= 100;
let checkCount = 1;
handleSlider();
//ste strength circul color to gray



//set passoerd lenght
function handleSlider(){
     inputSlider.value =passowrdLength;
      lengthDisplay.innerText = passowrdLength;

}

function setIndicator(color){
     indicater.computedStyleMap.backgroundColor = color;
}
function getRndInteger(min,max){
     return Math.floor(Math.random() * (max-min)) + min;
}
function generateRandomNumber(){
     return gerRndInterger(0,9);
}
function gernerateLowerCase(){
    return getRndInteger(97, 123);
}
function gernerateUpperCase(){
     return String.fromCharCode(gerRndInteger(65,91));
 }
