/**
 * Created by PK on 7/22/2015.
 */


//step#1
/*let myfun=function(a,b){
    return a+b;
}
let result_myfun=myfun(2,3);
console.log(result_myfun);*/



//step#2
let add=function(a:number,b:number):number
{
    return a+b;
}
let subtract=function(a:number,b:number):number
{
    return a-b;
}
let prod=function(a:number,b:number):number
{
    return a*b;
}
let divide=function(a:number,b:number):number
{
    return a/b;
}
let a='-';
let result;
switch(a)
{
    case '+':
       result=add(2,3);
        console.log(result);
        break;
    case '-':
       result=subtract(3,4);
        console.log(result);
        break;
    case '*':
      result=prod(10,5);
        console.log(result);
        break;
    case '/':
       result=divide(36,4);
        console.log(result);
        break;
    default :
        console.log("Invalid operation");
}

//step#3 function type  ()=>
 var myfun:()=>number=function():number
 {
     return 2;
 }
var demo:(a:string,b:number)=>string=function(a:string,b:number):string{
    return a+b;
}

var myAdd2: (x:number, y:number)=>number =function(x: number, y: number): number { //Anonymous function with type
    return x+y;
};

var myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { //type names dont matter
    return x+y;
};
