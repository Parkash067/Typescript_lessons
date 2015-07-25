/**
 * Created by PK on 7/25/2015.
 */

//step#1
/*function rest_para(...rest_arguments:number[]){
    if(rest_arguments.length>0)
    {
        for(var i=0;i<rest_arguments.length;i++)
        {
          //  console.log("Rest_arg"+i+"="+rest_arguments[i]);
            console.log("Argument"+i+"="+arguments[i]);//both lines have same output
        }
    }

}
rest_para(13,24,36,433,335);*/

//step#2
/* Following is a void type function declaration which has 2 normal parameters and also a rest array of type string
as its parameter. Note: a rest parameter array must be declared at last, if we declare it at the beginning of the normal
 parameter-list TypeScript compiler will generate a compile-time error. */
function getNames(sno:number, xml:string, ...argNames: string[]) {

// For loop which loops through each argument and print.
    for (var index = 0; index < argNames.length; index++) {
        document.write("argNames " + index + " = " + argNames[index] + " <br/> ");
    }

// Print normal parameters.
    document.write("Sno.: " + sno + "<br/>");
    document.write("Programming: " + xml);
}

// function is being called with 6 arguments.
getNames(55, "Xml", "TypeScript", "Php", "JavaScript", "Jquery");

//step#3
function buildName(firstName: string, ...restOfName: string[])
{//Named function with Rest parameters
    return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employeeName);

//step#4
//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[])=>string =
    function (firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }

//Note: Rest, optional and default parameters can only be at the end of the parameter list


//step#1
// ********** Function Overloading **********
function overload(a:number,b:number):number;
function overload(a:string,b:string):string;
function overload(a:boolean,b:boolean):boolean;
function overload(a:any,b:any):any
{
    return a+b;
}
console.log(overload(2,3));
console.log(overload("parkash","kumar"));
console.log(typeof overload(true,false));

//step#2
//Functions overloaded are declared with same name but are different in return type and parameter list.
function displayData(digit: number): number;
function displayData(techName: string): string;
function displayData(isChecked: boolean): boolean;

/* Another function with same name but with “any” as its return type and parameter list. */
function displayData(arg1: any): any {

    return arg1;
}

/* overloaded functions are called through its parameter types. */
document.write("digit: " + displayData(23) + " <br/> ");
document.write("Technology name: " + displayData(".NET") + " <br/> ");
document.write("isCheck: " + displayData(true));