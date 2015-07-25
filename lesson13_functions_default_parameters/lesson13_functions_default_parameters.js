/**
 * Created by PK on 7/25/2015.
 */
//step#1
function default_para(name, sex) {
    if (sex === void 0) { sex = 'male'; }
    return "Your info is: " + "<br>" + "Name: " + name + "<br>" + "Sex: " + sex + "<br><br>";
}
var result = default_para("parkash");
document.write(result);
result = default_para("Rabeea", "female");
document.write(result);
//step#2
/* A string type anonymous function declaration which has 4 parameters. Notice that last two parameters (php and html)
 are marked as default. */
var pLanguages = function (asp, js, php, html) {
    if (php === void 0) { php = "Php"; }
    if (html === void 0) { html = "Html"; }
    return (asp + " , " + js + " , " + php + " , " + html);
};
/* Call and print the above anonymous function, 2 parameters are passed from it. Other 2 are optional parameters which
are used as default. */
document.write(pLanguages("Asp.net", "JavaScript"));
//step#3
var buildName1 = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Khan"; }
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
var result = buildName1("zia");
console.log(result);
//# sourceMappingURL=lesson13_functions_default_parameters.js.map