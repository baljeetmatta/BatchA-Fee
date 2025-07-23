// function test()
// {
// console.log("Test")
// }
// function demo()
// {
//     console.log("Demo")

// }
// //test();
// //setInterval(test,1000);
// let id= setTimeout(test,1000);
// clearTimeout(id);

// demo();

// const startBtn=document.querySelector("#startBtn");
// const stopBtn=document.querySelector("#stopBtn");
// const display=document.querySelector("#display");
// let count=0;
// let id=0;

// var test=()=>{
//     console.log("test timeout called..")
//    id= setTimeout(test,2000);
// }
// setTimeout(test,2000);

// let isRunning=false;
// startBtn.addEventListener("click",function(){
//     //clearInterval(id);
//     if(isRunning==false)
//     {
//     id=setInterval(counter,400);
//     isRunning=true;
//     }

// });
// let counter=()=>{
//     count++;
//     display.innerText=count;

// }
// stopBtn.addEventListener("click",function(){
//     clearInterval(id);
//     isRunning=false;
// })



function test()
{

    for(let  i=1;i<=3;i++)
    {
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
}
test();

console.log(i);
