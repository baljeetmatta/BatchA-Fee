// class Demo
// {
//     constructor(fullname)
//     {
//         this._fullname=fullname;
//     }
//     // name="Demo";
//     print=()=>{
//         console.log(this._fullname);

//     }
//     printName(){
//         console.log(this._fullname);
//     }
//     get fullname()
//     {
//         return this._fullname;

//     }
//     set fullname(value)
//     {
//         this._fullname=value;
//     }
// }
// let d=new Demo("Name");
// //d.print();
// //d.printName();
// d.name="test";

// console.log(d.name);

// function Demo(name)
// {
//     this._name=name;
//     Object.defineProperty(this,"name",{
//         get:function(){
//             return this._name;
//         },
//         set:function(value){
//                 this._name=value;
//         }
//     });
// }
// d=new Demo("Test")
// console.log(d.name);
const user={
    _name:"Demo name",
    get name(){
        return this._name;
    }

}
console.log(user.name);

//g7, 25k, 8 256ssd 10th silver
//surface->10 16 256, 32k 

class Base
{
    constructor()
    {
        
    }
    constructor(name)
    {
        this._name=name;
    }
    get name()
    {
        return this._name;
    }
}
class Derived extends Base
{
    constructor(name,code)
    {
       // super(name);
        this._code=code;
    }
}
d=new Derived("Name","001");
console.log(d.name);

