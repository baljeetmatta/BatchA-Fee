const pContent = document.querySelector("#pContent");
//pContent.onclick=clickHandler;
//1. Tag Attributes - onclick
/*
pContent.onclick=function(){
    alert("Another fun...")
}

function clickHandler()
{
    alert("Hi");

}
    */
/*
pContent.addEventListener("click",function(){

})
function clickHandler(e)
{
 console.log(e.target);

let id=  e.target.getAttribute("id")
if(id=="button1")
 alert("button1");

if(id=="button2")
 alert("button2")

}
const button1=document.querySelector("#button1");
const button2=document.querySelector("#button2");

button1.addEventListener("click",clickHandler);
button2.addEventListener("click",clickHandler);


// button1.addEventListener("click",function(e){

//     alert(pContent.innerText);
//     console.log(e);


// })
// const button2=document.querySelector("#button2");
// button2.addEventListener("click",function(){

// })
*/


// const button1=document.querySelector("#button1");
// const button2=document.querySelector("#button2");
// const button3=document.querySelector("#button3");
const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digits");
const plusButton = document.querySelector("#plusButton");
const equalButton = document.querySelector("#equalButton");
let operand1 = 0;
let operator = "";
let isOperator = false;

equalButton.addEventListener("click", equalHandler)
function equalHandler() {
    let operand2 = parseInt(display.value);

    if (operator == "+") {
        let result = operand1 + operand2;
        display.value = result;


    }
}
plusButton.addEventListener("click", function () {
    operand1 = parseInt(display.value);
    operator = "+";
    isOperator = true;


})

//NodeList-Array
digits.forEach(function (item) {
    item.addEventListener("click", clickHandler)
})



// button1.addEventListener("click",clickHandler);
// button2.addEventListener("click",clickHandler);
// button3.addEventListener("click",clickHandler);
// button4.addEventListener("click",clickHandler);
// button5.addEventListener("click",clickHandler);
// button6.addEventListener("click",clickHandler);

function clickHandler(e) {
    if (display.value == "0" || isOperator == true) {
        display.value = "";
        isOperator = false;
    }


    display.value += e.target.innerText;

}

// button1.addEventListener("click",function(){
//     display.value+="1";

// })
// button2.addEventListener("click",function(){
//     display.value+="2";

// })

// button3.addEventListener("click",function(){
//     display.value+="3";

// })
