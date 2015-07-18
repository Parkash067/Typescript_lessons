/**
 * Created by PK on 7/18/2015.
 */
/**
 * Created by PK on 7/18/2015.
 */
//step #1
/*var a =10;
 if(a>5)
 {
 a=2;
 console.log("In if scope value of a : "+a);
 }
 console.log("out of the scope value of a : "+a);*/

//step#2
/*if(true)
{
	var a=2;
	console.log("In scope: "+a);
}
console.log("Out of the scope: "+a);*/


//step#3 do same thing using let keyword
/*if(true)
{
	let a=5;
	console.log("In scope: "+a);
}

console.log("Out of the scope: "+a)*/;//see there is an error because let keyword help us to define a variable as well as scope of it
									//therefore outside the if scope it is not accessible
									
//step#4
/*let a=10;
if(true)
{
	 a=5;
	console.log("In scope: "+a);
}

console.log("Out of the scope: "+a);*/



//step#5
let a=10;
if(true)
{
	 let a=5;
	console.log("In scope: "+a);
}

console.log("Out of the scope: "+a);