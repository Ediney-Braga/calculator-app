const display = document.querySelector("#display h2");
const buttons = document.querySelectorAll("button");
const inputRadio = document.querySelectorAll("input[type='radio']");



inputRadio.forEach((radio)=>{
    radio.addEventListener("click",radioClick);

});

buttons.forEach((button)=>{
    button.addEventListener("click",teste)
});


function teste (button){
    let contentButton = button.target.innerText;
    
    switch (contentButton){
        case "DEL" :
            display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length -1);
            break;
        case "=" :
            let tela = display.innerHTML;
            let tela1 = tela.replace("x", "*");
            tela1 = eval(tela1);
            display.innerHTML = tela1;
            break;
        case "RESET":
            display.innerHTML = "";
            break;
        default:
            display.innerText += contentButton; 
    }
};

function radioClick (element){
    let idElement = element.target.id;

    if(idElement == "theme1"){
        theme1();
    } else if (idElement == "theme2") {
        theme2();
    } else {
        theme3();
    }
}


