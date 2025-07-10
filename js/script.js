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
// var result = 20;
// var data = "Name"
// //var message="the "+data+" of "+result+" is correct";
// //var message ="the "+data+" of "+result+" is correct";
// var message = `the ${data} of ${result} is correct`;
// message = "This is a string";

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

// let arr=[10,20,30,40,50];
// console.log(arr);
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
// for(i=0;i<arr.length;i++)
//     console.log(arr[i]);
/*
let arr=[100,200,300,400];
let arr1=[100,200,300,400,400];
let arr2=[100,200,300];
function myLogic(item,index)
{
    console.log("My Logic called arr...",index);


}
function myLogic1()
{
    console.log("Processing arr1...")
}
print(arr,myLogic);
print(arr1,myLogic);


//print(arr2);
/*
for(i=0;i<arr.length;i++)
    console.log(arr[i]);

for(i=0;i<arr1.length;i++)
    console.log(arr1[i]);

for(i=0;i<arr2.length;i++)
    console.log(arr2[i]);

function print(array,callback)
{
    for(let i=0;i<array.length;i++)
   // console.log(array[i]);
        callback(array[i],i,array);


}
// function display(x)
// {
//     console.log(x);

// }
// display(console.log("Hello"));
*/
//forEach, filter, map
// print(Array,callback)
// forEach(Array,callback);
//let arr=[100,200,300,400,500];
//Traditional
// for(i=0;i<arr.length;i++)
//     console.log(arr[i]);

// arr.forEach(myLogic);
// function myLogic(item,index,array)
// {
//     console.log(item);

// }


// function test()
// {
//     console.log("TEst called...")
// }
// test();

// let x=10;
// console.log(typeof x);
// console.log(x);

// let y=test;
// console.log(typeof y);
// //console.log(y);
// y();

// arr.forEach(function(){

// })
// arr.forEach(function(){

// });
// print(arr,function(){

// })
// print(Array,callback)
// let y=test;
// let z=function(){

// }
// z();
//arr.forEach(console.log)
//filter
//let arr = [23, 4, 5, 78, 3];
// let results=[]
// // for(let i=0;i<arr.length;i++)
// // {
// //     if(arr[i]%2==0)
// //         results.push(arr[i]);
// // }
// arr.forEach(function(item){
//     if(item%2==0)
//         results.push(item);
// })
//FILTER

// let results=arr.filter(function(item){
//         if(item%2==0)
//             return true;
// })

//MAP
// let results=[];
// arr.forEach(function(item){
//     results.push(item*2);
// })
// let results = arr.map(function (item) {
//     if (item % 2 == 0)
//         return item * 2;
//     else
//         return item;

// })
// console.log(results);
/*
class City
{
   char  name[];
   float temp;
   long population

   getName()
   {
   }
   getPopulation()
   {
   }
}
 test()
 {}
 City c=new City();


    */

//OBJECTS
// let arr=[];
// let obj={}
// let cities=["ABC","XYZ","Z"];
// let temp=[34,45.6,34.5];
// let population=[23232,34343,4545];

//Key-value pair
// let obj={
//     "name":"Test",
//     "temp":34.2,
//     population:23232,
//     name:"Demo"
// }

// console.log(obj);
let arr=[];
let obj={
    "name":"Test",
    city:"ABC",
    years:10,
    "total students":1000,
    history:[233034,232432],
    locations:{"location1":"asdsadsad","location2":"asdsadsad"},
    getName:getFullName

};
let obj1={
    "name":"Testing",
    city:"ABC",
    years:10,
    "total students":1000,
    history:[233034,232432],
    locations:{"location1":"asdsadsad","location2":"asdsadsad"},
    getName:getFullName

};

function getFullName()
{
    console.log(this.name)
}

obj1.getName();
//obj.name="Test";
//console.log(obj);
// console.log(obj.name);
// obj.population=2000;
// delete obj.city;

// console.log(obj);

// obj.history.forEach(function(item){
//     console.log(item);

// })
//1. Object.keyname
//2 Array notation
//console.log(obj["name"]);
//console.log(obj.name);
//console.log(obj.total students);
//console.log(obj["total students"]);
//let test="name";
//console.log(obj.test);
//console.log(obj[test]);

// for(let key in obj)
// {
//     console.log(key,obj[key]);

// }
obj.getName();

const menu=[
    {"id":"test"},{"id":"testing"}
]