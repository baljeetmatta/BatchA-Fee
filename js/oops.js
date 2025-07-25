// class Data{
   
   
//     constructor(name,age)
//     {
//         this._name=name;
//         this._age=age;

//     }
//    init=(name,age)=>{
//     this._name=name;
//     this._age=age;

//    }
//     set name(value){
//         this._name=value;
//     }
//     get name(){
//         return this._name;
//     }

//     // setName=(value)=>{
//     //     this.name=value;
//     // }
//     // getName=()=>{
//     //     return this.name;
//     // }
//     // setAge=(value)=>{
//     //     this.age=value;
//     // }
//     // getAge=()=>{
//     //     return this.age;
//     // }
//     // read=(name,age)=>{
//     //     this.name=name;
//     //     this.age=age;

//     // }
//     // print=()=>{
//     //     console.log(this.name,this.age);
//     // }
//     // name="Test";//Instance Variables
//     // print(){
//     //     console.log(this.name);
//     // }
//     // printData=()=>{
//     //         console.log(this.name);
//     // }


// }
// /*
// this ->Instance variable hiding
// class Data
// {
// int a;
//     void print(int a)
//     {
    
//         cout<<this.a;
//     }
// }


// */


// let d=new Data("Coding",20);//Object/Instance
// //d.read("Code",10);
// //d.setName("Code");
// //console.log(d.getName());
// //d.name="Code";
// console.log(d.name);

// //d.print();
// //d.printData();


// //Object
// //C++
// /*

// Data d;//Compile Time
// Data *d=new Data();//Run-time Object


// Java
// Data d;//Reference ->null
// d=new Data();



// */
/*

function Data(name,age)
{
    this._name=name;
    this._age=age;
    Object.defineProperty(this,"name",{
        get:function(){
            //console.log(this._name);
            return this._name;
        },
        set:function(value){
            this._name=value;
        }

    })
}
//let d=Data("Code",20);
let d=new Data("Coding",10);
console.log(d.name);
*/
//Single
//Multiple
//Multilevel
//Hirerachal
//Hybrid
/*
            A
    
    B extends A         C extends A



            D extends B,C


*/
/*

        A

B            c

C.   d      e.  f



*/
//super

class Base
{
    
     print(){
        console.log("Base called")
    }

}

class Derived extends Base
{
    Derived(data,age)
    {
       // super(data);

    }
    print=()=>{
        super.print();
    }
}

let d=new Derived();
d.print();
