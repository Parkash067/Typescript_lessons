/**
 * Created by PK on 7/18/2015.
 */

//step#1 // constant type
//const a:number; // error const variable must be initialize
const myname:string="parkash";
const a=2;
const bool:boolean=false;


//step#2 // any type

let variable:any=2;
console.log("type of varibale: "+typeof (variable));
variable="parkash";
console.log("type of varibale: "+typeof (variable));
variable=true;
console.log("type of varibale: "+typeof (variable));
variable=["pakistan","india"];
console.log("type of varibale: "+typeof (variable));
let b=variable;
console.log("type of variable: "+typeof (b));



