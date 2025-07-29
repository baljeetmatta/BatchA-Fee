const name=document.querySelector("#name");
const job=document.querySelector("#job");
const sendBtn=document.querySelector("#sendBtn");
sendBtn.addEventListener("click",()=>{

    let obj={
        name:name.value,
        job:job.value
    }
    sendRequest(obj);


})
let sendRequest=(obj)=>{

    let xmlRequest=new XMLHttpRequest();
    xmlRequest.open("POST","https://reqres.in/api/users");
    xmlRequest.setRequestHeader("x-api-key","reqres-free-v1")
xmlRequest.addEventListener("load",()=>{
    console.log(JSON.parse(xmlRequest.responseText))
})
xmlRequest.setRequestHeader("content-Type","application/json");

//variablename=value&variable=value
xmlRequest.send(`name=${obj.name}`);//JSON.stringify(obj));

}