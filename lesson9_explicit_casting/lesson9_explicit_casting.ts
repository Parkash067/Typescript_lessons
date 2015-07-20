/**
 * Created by PK on 7/20/2015.
 */

//step#1
let a:string="parkash";
console.log(typeof a);
a=<any>2;
console.log(typeof a);
a="pakistan";
console.log(typeof a);

let b=true;
b=<any>3;



//step#2
let number_array:number[]=[1,3,4,5,6];
number_array[2]=<any>"parkash";
for(let i=0;i<number_array.length;i++)
{
    document.write(i+"="+number_array[i]+"<br>");
}
document.write("<hr>");

//step#3
 let string_array:string[];
string_array=<any>[1,"string",true];
for(let i=0;i<string_array.length;i++)
{
    document.write(i+"="+typeof string_array[i]+"<br>");
}

//step#4
let aray:number[]=[1,3,<any>"parkash"];

//step#5
let duck_type={name:"parkash",age:22};
console.log(duck_type);
duck_type=<any>{name:"parkash"};
console.log(duck_type);
/*duck_type={address:"pib colony"};//error*/
duck_type={name:"parkash",age:22,sex:"male"};
console.log(duck_type);

//step#6
let complex_type=<any>{name:"parkash",id:067};// once you define object with <any> then you can add,update and remove property easily
console.log(complex_type);
complex_type={shape:"circle",dimension:"2D"};
console.log(complex_type);
complex_type={shape:"square"};
console.log(complex_type);