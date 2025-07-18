// const listItems=document.querySelector("#listItems");
// const item=document.querySelector("#item");
// const addBtn=document.querySelector("#addBtn");

// addBtn.addEventListener("click",function(){

//    let liItem=  document.createElement("li");
//    //<li>Content</li>
//    liItem.innerText=item.value;

//    listItems.appendChild(liItem);
// })

const taskContainer = document.querySelector("#taskContainer");
const taskname = document.querySelector("#taskname");
const addBtn = document.querySelector("#addBtn");
let tasks = [];
let taskid = 1;
taskname.addEventListener("keyup", function (e) {
    //console.log(e);
    if (e.key == "Enter") {
        let taskObj = {
            id: taskid,
            title: taskname.value,
            status: "Pending"
        }
        taskid++;
        tasks.push(taskObj);
storeTasks()
        // tasks.push(taskname.value);

        addDom(taskObj);
        console.log(tasks);

        taskname.value = "";
    }


})
addBtn.addEventListener("click", function () {

    // addDom();
    console.log(tasks);


})
function addDom(task) {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id",task.id);

    let spanTitle = document.createElement("span");
    spanTitle.innerText = task.title;
    mainDiv.appendChild(spanTitle);

    let chkbox = document.createElement("input");
    chkbox.setAttribute("type", "checkbox");
    if(task.status=="Completed")
    {    chkbox.checked=true;
        spanTitle.style.textDecoration="line-through";
        
    }

    mainDiv.appendChild(chkbox);

    chkbox.addEventListener("click", function () {
        //console.log(chkbox.checked);
        let status = "Pending";

        if (chkbox.checked) {
            spanTitle.style.textDecoration = "line-through";
            status = "Completed";
        }

        else
            spanTitle.style.textDecoration = "none";

        task.status = status;
        console.log(tasks);
        storeTasks()


    })

    let delBtn = document.createElement("button");
    delBtn.innerText = "Del"
    mainDiv.appendChild(delBtn);

    // delBtn.addEventListener("click", function () {
    //     mainDiv.remove();
    //     tasks = tasks.filter(function (item) {
    //         if (item.id != task.id)
    //             return true;
    //     })
    //     console.log(tasks);


    // })
    delBtn.addEventListener("click",delHandler);

    taskContainer.appendChild(mainDiv);

}

function delHandler(e)
{
    let id=e.target.parentNode.getAttribute("id");

    e.target.parentNode.remove();
        tasks = tasks.filter(function (item) {
            if (item.id != id)
                return true;
        })
        console.log(tasks);
        storeTasks()


}

//localStorage
//setItem,getItem,remove
//localStorage.setItem("test",10);
//console.log(localStorage.getItem("test"));
let arr=[12,23,40,50,60];
//console.log(arr);
//document.write(arr);
/*localStorage.setItem("arr",arr);
let str=localStorage.getItem("arr").split(",")
console.log(str[0]);
*/
/*
localStorage.setItem("arr",JSON.stringify (arr));
let str=JSON.parse(localStorage.getItem("arr"));

console.log(str[0]);

let obj={"name":"Code"};
console.log(obj);
//document.write(obj);
localStorage.setItem("Object",JSON.stringify(obj));
*/

function storeTasks()
{
    localStorage.setItem("tasks",JSON.stringify( tasks));


}
function getTasks()
{
    if(localStorage.getItem("tasks"))
        tasks=JSON.parse(  localStorage.getItem("tasks"));

    tasks.forEach(function(task){
        if(taskid<task.id)
            taskid=task.id;
        addDom(task);
    })
    if(tasks.length!=0)
    taskid++;

}
getTasks();
