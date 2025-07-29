//AJAX
//CLIENT-SIDE SCIPTING LANGUAGE
//flat file
/*
name
age

city
name
age
city
--------
csv comma separated values
name,age,city

name,age,city

XML-HTML <b></b>user defined tags
<Students>
    <Student>
        <Name></Name>
        <Age></Age>
        <City></City>

    </Student>

</Students>
JSON
key:value
XMLHttpRequest ->Class browser
fetch()->promises
axios

XMLHttpRequest
1.Create an Object -> XMLHttpRequest
2. Prepare , Method,URL,async/sync
3. Event load, readstatechange
4.send

*/
//1.
// let xmlRequest=new XMLHttpRequest();
// //2. 
// xmlRequest.open("GET","./products.json");
// //3.Event
// // xmlRequest.onload=function(){

// //     console.log("OnLoad",xmlRequest.responseText);

// // }
// // xmlRequest.addEventListener("readystatechange",()=>{
// //     if(xmlRequest.readyState==4 && xmlRequest.status==200)
// //             console.log("Load",xmlRequest.responseText);
// // })

// xmlRequest.addEventListener("load",()=>{

//     if(xmlRequest.status==200)
//    {
//     console.log("Load",xmlRequest.responseText);
//     let obj=JSON.parse(xmlRequest.responseText);
//     console.log(obj);

//    }
// })
// //4.
// xmlRequest.send();


const container=document.querySelector("#container");
/*
let xmlRequest=new XMLHttpRequest();
xmlRequest.open("GET","https://jsonplaceholder.typicode.com/posts");
xmlRequest.addEventListener("load",()=>{
    //console.log(xmlRequest.responseText);
    let posts=JSON.parse(xmlRequest.responseText);
//    console.log(posts);
    posts.forEach((post)=>{
        addPost(post);
    })

})
xmlRequest.send();
function addPost(post)
{
    let mainDiv=document.createElement("div");
    let titleDiv=document.createElement("div");
    let bodyDiv=document.createElement("div");
    let hr=document.createElement("hr");
    titleDiv.innerText=post.title;
    bodyDiv.innerHTML=post.body;
    mainDiv.append(titleDiv,bodyDiv,hr);
    container.appendChild(mainDiv);




}

*/

let xmlRequest=new XMLHttpRequest();
xmlRequest.open("GET","https://reqres.in/api/users?page=2",true);
xmlRequest.addEventListener("load",()=>{
    console.log(xmlRequest.responseText);
    let users=JSON.parse(xmlRequest.responseText);
//    console.log(posts);
    users.data.forEach((user)=>{
        addUser(user);
    })

})
xmlRequest.setRequestHeader("x-api-key","reqres-free-v1")
xmlRequest.send();//HALT
console.log("Request Sent..")
function addUser(user)
{
    let mainDiv=document.createElement("div");
    let titleDiv=document.createElement("div");
    let bodyDiv=document.createElement("div");
    let img=document.createElement("img");
    let hr=document.createElement("hr");
    img.src=user.avatar
    titleDiv.innerText=user.first_name+" "+user.last_name;
    bodyDiv.innerHTML=user.email;
    mainDiv.append(img, titleDiv,bodyDiv,hr);
    container.appendChild(mainDiv);




}
