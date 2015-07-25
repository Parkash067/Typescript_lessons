/**
 * Created by PK on 7/22/2015.
 */

//step#1:simple named function
/*function info(name:string,age:number,sex:string):string
{
    return "Your name is: "+name+"<br>"+"Age: "+age+"<br>"+"Sex: "+sex+"<br><br>";

}
var bio_data=info("parkash",22,"male");
document.writeln(bio_data);
bio_data=info("zain",23,"male");
document.writeln(bio_data);
bio_data=info("rida",24,"female");
document.writeln(bio_data);*/


//step#2: function with optional parameter => optional parameter works right to left
function info(name?:string,age?:number,sex?:string):string
{
    return "Your name is: "+name+"<br>"+"Age: "+age+"<br>"+"Sex: "+sex+"<br><br>";

}
var bio_data=info("parkash",<any>'',"male");
document.writeln(bio_data);
bio_data=info("zain",22,"male");
document.writeln(bio_data);
bio_data=info("rida",24);
document.writeln(bio_data);

//step#3
function buildName(firstName: string, lastName?: string) : string {//Named function with optional parameters
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

var result1 = buildName("Bob");  //works correctly because last parameter is optional
//var result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams");  //correct



//anonymous function type with optional parameters
var buildName1 : (firstName: string, lastName?: string) => string =
    function(firstName: string, lastName?: string) : string {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }


var result2 = buildName1("Bob");
console.log(result2);
