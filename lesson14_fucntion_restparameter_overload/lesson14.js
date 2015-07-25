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
function getNames(sno, xml) {
    var argNames = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        argNames[_i - 2] = arguments[_i];
    }
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
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
//step#4
//anonymous function type with Rest parameters
var buildNameFun = function (firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
};
function overload(a, b) {
    return a + b;
}
console.log(overload(2, 3));
console.log(overload("parkash", "kumar"));
console.log(typeof overload(true, false));
/* Another function with same name but with “any” as its return type and parameter list. */
function displayData(arg1) {
    return arg1;
}
/* overloaded functions are called through its parameter types. */
document.write("digit: " + displayData(23) + " <br/> ");
document.write("Technology name: " + displayData(".NET") + " <br/> ");
document.write("isCheck: " + displayData(true));
//# sourceMappingURL=lesson14.js.map