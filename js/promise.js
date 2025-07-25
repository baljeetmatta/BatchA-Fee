//callback
///nested Callback hell
//Promise
//Pending -new Promise
//Fullfilled -- Resolve
//Rejected --- reject
let number=6;
let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(number%2==0)
            //resolve(`Even ${number}`);
        resolve({data:number,msg:"Even"})

        else
            reject({data:number,msg:"Not a Even"})
         
            //reject(`Not an Even ${number}`);
    },4000);
})
// setTimeout(()=>{
// console.log(prom);
// },400)

prom.then((response)=>{
    console.log(response.msg,response.data)
}).catch((data)=>{
    console.log(data);

}).finally(()=>{

})


Promise.race([
    Promise.resolve("Resolved 1"),
    Promise.reject("Reject 2"),
    Promise.resolve("Resolve 3")
]).then((data)=>{
    console.log("THen",data);
}).catch((data)=>{
    console.log(data);
})