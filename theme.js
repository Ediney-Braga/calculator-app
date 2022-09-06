const body = document.querySelector("body");
const calcBody = document.querySelector("#calcBody");
const displayBack = document.querySelector("#display");
const blueButton = document.querySelectorAll(".blueButton");
const redButton = document.querySelector(".redButton");
const header = document.querySelector("header");
const selector = document.querySelector("#inputTheme div");
const inputSelector = document.querySelector("input[type='radio']")
const buttonCustom = document.querySelectorAll(".buttonCustom");



function theme1 (){
    header.style.color = "#fff";
    body.style.background = "hsl(222, 26%, 31%)";
    displayBack.style.background = "hsl(224, 36%, 15%)";
    displayBack.style.color = "#fff";
    calcBody.style.background = "hsl(223, 31%, 20%)"
    redButton.style.background = "hsl(6, 63%, 50%)";
    redButton.style.color = "#fff";
    redButton.style.boxShadow = "0px 4px 1px 0px hsl(6, 70%, 34%)";
    selector.style.background = "hsl(223, 31%, 20%)";
    
    blueButton.forEach((element)=>{
        element.style.background = "hsl(225, 21%, 49%)";
        element.style.boxShadow = "0px 4px 1px 0px hsl(224, 28%, 35%)";
    });  
    
    buttonCustom.forEach((element)=>{
        element.style.background = " hsl(30, 25%, 89%)";
        element.style.color = "hsl(224, 36%, 15%)";
        element.style.boxShadow = "0px 4px 1px 0px hsl(28, 16%, 65%)";
    });

}

function theme2 (){
    header.style.color = " hsl(60, 10%, 19%)";
    body.style.background = "hsl(0, 0%, 90%)";
    displayBack.style.background = " hsl(0, 0%, 93%)";
    displayBack.style.color = "#000";
    calcBody.style.background = "hsl(0, 5%, 81%)"
    redButton.style.background = "hsl(25, 98%, 40%)";
    redButton.style.color = "#fff";
    redButton.style.boxShadow = "0px 4px 1px 0px hsl(25, 99%, 27%)";
    selector.style.background = "hsl(0, 5%, 81%)";
    
    blueButton.forEach((element)=>{
        element.style.background = "hsl(185, 42%, 37%)";
        element.style.boxShadow = "0px 4px 1px 0px hsl(185, 58%, 25%)";
    });  
    
    buttonCustom.forEach((element)=>{
        element.style.background = " hsl(45, 7%, 89%)";
        element.style.color = "hsl(224, 36%, 15%)";
        element.style.boxShadow = "0px 4px 1px 0px  hsl(35, 11%, 61%)";
    });
};

function theme3 (){
    header.style.color = "yellow";
    body.style.background = " hsl(268, 75%, 9%)";
    displayBack.style.background = "hsl(268, 71%, 12%)";
    displayBack.style.color = "yellow";
    calcBody.style.background = "hsl(268, 71%, 12%)"
    redButton.style.background = "hsl(176, 100%, 44%)";
    redButton.style.color = "#000";
    redButton.style.boxShadow = "0px 4px 1px 0px hsl(177, 92%, 70%)";
    selector.style.background = "hsl(268, 71%, 12%)";

    blueButton.forEach((element)=>{
        element.style.background = "hsl(281, 89%, 26%)";
        element.style.boxShadow = "0px 4px 1px 0px hsl(290, 70%, 36%)"
    });  

    buttonCustom.forEach((element)=>{
        element.style.background = "hsl(268, 47%, 21%)";
        element.style.color = "yellow";
        element.style.boxShadow = "0px 4px 1px 0px hsl(285, 91%, 52%)";
    });

    if(inputRadio.checked){
        inputRadio.style.background = "hsl(176, 100%, 44%)";
    }
}