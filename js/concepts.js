// //Hoisting

// // console.log(data);
// // data=20;
// // console.log(data);
// // var data=10;
// // test();
// // function test()
// // {

// // }
// // test();
// /*
// function test()
// {
//     code=20;
//     console.log(code);

//         var code=10;
//         console.log(code);
// }
// */
// //console.log(code);
// //Arrow Functions, Function as an expression ->Hoisting(not included)
// function test()
// {
//     console.log("Test called...")
// }
// //testing();
// // var testing=function(){

// //     console.log("Testig calling...")
// // }
// let testing=()=>{
//     console.log("Testing...");

// }

// testing();
// function sum(x,y)
// {
//     return x+y;
// }
// let add=(x,y)=>{
//     return x+y;
// }
// let add1=(x,y)=>x+y;
// let add2=(x)=>x;
// let add3=x=>x;

// var getFullName=()=>{
//    // console.log(this);
//     //console.log(this.name);

// }

// let obj={
//     name:"Test",
//     getName:getFullName
// }

// obj.getName();

// function getFullName()
// {
//     console.log(this.name);

// }
// obj.getName();

//closure property
/*function add(x)
{
    console.log(x);
    return function(){
        console.log(x);
    }
}

let result=add(10);


result();
*/
/* CURRYING*/
//multiple Aruguments ->Single Argument->Chain of function
/*function sum(x,y)
{
    return x+y;

}
function add(x)
{
    return function(y){
        return x+y;
    }

}
let result=add(10);


let output=result(30);
console.log(output);


*/
//overloading

function test(x,y)
{
    console.log("Single Arguemnt")

}
// function test()
// {
//     console.log("Test blank...")

// }
test();
test(4);


