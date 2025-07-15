//document
//getElementByID
//getElementsByClassName
//getElementsByTagName
//querySelector
//querySelectorAll
//int a=10;
//int b=a;
//int *c=&b;
//int &d=b;
//d=20;


// const elements=document.getElementsByTagName("p");
// console.log(elements);
// //console.log(elements[0]);
// //console.log(elements[0].innerText);
// elements[0].innerText="Hi";
// //console.log(document.all);
// //elements[0].innerHTML="<b>Hello</b>";
// //elements[0].style.backgroundColor="red";
// //elements[0].classList.add("format");


///elements=10;

// const pContent=document.getElementById("pContent");
// pContent.innerText="Hi";


//const elements=document.querySelectorAll("div.x");
//console.log(elements);
function clickHandler()
{
    alert('Hello');

}
const bigImage=document.querySelector("#bigImage");

function changeImage(img)
{
    bigImage.src=img.src;
    
    //console.log(this);
    //this.src="images/2.jpg";
   // img.src="images/2.jpg";



}