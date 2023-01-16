let clickableButtons = document.querySelectorAll(".clickable")
let displej = "";
let hodnota = 0;
console.log(displej)
let vykresliDisplej = function(){
    let displejElement = document.querySelector(".displej")
    displejElement.innerHTML = displej
}
let vyprazdniDisplej = function (){
    let displejElement = document.querySelector(".displej")
    displejElement.innerHTML = "";
    displej="";

}
let prictiHodnotu = function(){
    hodnota+=parseInt(displej)
}
let vykresliVyslednouHodnotu = function (){
    prictiHodnotu();
    let displejElement = document.querySelector(".displej")
    displejElement.innerHTML=hodnota.toString();
    hodnota = 0;
    displej = ""
}
clickableButtons.forEach((item)=> {
    item.addEventListener("click",()=>{
        switch (item.getAttribute("id")){
            case "one-button":
                displej+="1";
        vykresliDisplej();
                break;
            case "two-button":
                displej+="2";
        vykresliDisplej();
                break;
            case "three-button":
                displej+="3";
        vykresliDisplej();
                break;
            case "four-button":
                displej+="4";
        vykresliDisplej();
                break;
            case "five-button":
                displej+="5";
        vykresliDisplej();
                break;
            case "six-button":
                displej+="6";
        vykresliDisplej();
                break;
            case "seven-button":
                displej+="7";
        vykresliDisplej();
                break;
            case "eight-button":
                displej+="8";
        vykresliDisplej();
                break;
            case "nine-button":
                displej+="9";
        vykresliDisplej();
                break;
            case "zero-button":
                displej+="0";
        vykresliDisplej();
                break;
            case "plus-button":
                prictiHodnotu();
                vyprazdniDisplej();
                break;
            case "equal-button":
                vykresliVyslednouHodnotu();
        }
    })
})

