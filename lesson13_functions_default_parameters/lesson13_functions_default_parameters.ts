/**
 * Created by PK on 7/25/2015.
 */

//step#1
function default_para(name:string,sex:string='male'):string{
    return "Your info is: "+"<br>"+"Name: "+name+"<br>"+"Sex: "+sex+"<br><br>";
}
var result=default_para("parkash");
document.write(result);
result=default_para("Rabeea","female");
document.write(result);


//step#2
/* A string type anonymous function declaration which has 4 parameters. Notice that last two parameters (php and html)
 are marked as default. */
var pLanguages = function (asp: string, js: string, php: string = "Php", html: string = "Html"): string {
    return (asp + " , " + js + " , " + php + " , " + html);
};

/* Call and print the above anonymous function, 2 parameters are passed from it. Other 2 are optional parameters which
are used as default. */
document.write(pLanguages("Asp.net", "JavaScript"));


//step#3
var buildName1 : (firstName: string, lastName?: string) => string =
    function(firstName: string, lastName = "Khan") : string {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }

var result=buildName1("zia");
console.log(result);