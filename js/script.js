 "use strict"
            // a=10;
            // console.log(typeof a);

            // a="Hello";
            // console.log(typeof a);
           // console.log(testData);
/*
           let testData=10;
            console.log(testData);


            testData=20;
            console.log(testData);
const data=10;
//data=20;
*/
/* day 2*/
//var data='This is a string';
//console.log(typeof data);
var result=20;
var data="Name"
//var message="the "+data+" of "+result+" is correct";
//var message ="the "+data+" of "+result+" is correct";
var message =`the ${data} of ${result} is correct`;
message="This is a string";

// console.log(message.length);
// message=  message.toLowerCase();
// var pos= message.indexOf("s");//0 based position, -1

// console.log(pos);
// pos=message.indexOf("x",pos+1);
// console.log(pos);
// pos=message.lastIndexOf("s");
// console.log(pos);
// console.log(message.charAt(0));
//console.log(message.substring(2,4));
//console.log(message.startsWith("Thi"));
//operators-Airthmetic, Relational , Logical, assignment, comparison, modulo, bitwise
//let a=10;
//let b="10";
//console.log(a===b);
//let c=a==b;
//int c=a==b;
/*

if(true)
printf("hello")
*/
// if(a===b)
//     console.log("Hello");
/*
    Control Structures
    1. Sequence Control
    2. Transfer of Control/Selection/Decision
        if if else else if switch ?:
    3.Loop Control/Iteration Logic /repetitive logic
      do-while, for, while, break, continue

      ///prototype/signature
      returntype funname(argments type)
      int sum(int,int);
      int sum(int x, int y)
      {
      }
*/

//display();
//console.log(display());
// let x=display();
// console.log(x);

// function display()
// {
//     console.log("Hello");
//     return 1;


// }
// function sum()
// {
//     //console.log(arguments);
// //console.log(arguments[0])
//    // console.log(x,y);
// }

// sum(10,20,30);

/*
    fact,reverse of any digit(3466),
    Valid Email
    1. @
    2. @ must not be the first character
    3. Last 3/4 .   .com, .in

    Palindrome


*/
/*
//Callback functions
function carService(callback)
{
    console.log("Service...");
    callback();

}
function carWash()
{
    console.log("Wash ...")

}
function carDelivery()
{

    console.log("Delivery...")
}
//carService(10);

//carService(carWash);
carService(carDelivery);

//carWash();
//carDelivery

// function test()
// {
//     console.log("Test ...")
// }


// let x=10;
// console.log(typeof x);
// console.log(x);
// let y=test;
// console.log(typeof y);
// console.log(y);
// y();

// let z=function(){
//     console.log("Z called")
// }

// z();




//console.log(message);

*/
//array
/*
 int arr[5];//compile time array
 int arr[]={12,3,4,5,6};//dynamic
 int arr[]=new int[5];//dynamic
int arr[5];
0-4 
arr[5];
arr[2]
*(arr+2)
*/

//let arr=[3,40,50,"Data",34.3];
//console.log(arr);

// let arr=[23,3,4];
// console.log(arr);
// arr[30]=10;
// console.log(arr);
//push,pop,shift,unshift,splice

let arr=[10,20,30,40,50];
console.log(arr);
// arr.push(100);
// console.log(arr);
// let element=arr.pop();
// console.log(arr);
// console.log(element);
// arr.unshift(100);
// console.log(arr);
// let element=arr.shift();
// console.log(arr);
// console.log(element);

// let element=arr.splice(1,2);
// console.log(arr);
// console.log(element)
//arr.splice(1,2,100,200,300,400)
//console.log(arr);
for(i=0;i<arr.length;i++)
    console.log(arr[i]);
