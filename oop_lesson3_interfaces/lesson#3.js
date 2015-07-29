/**
 * Created by PK on 7/29/2015.
 */
//for concepts read this link https://tutorialstown.com/typescript-interfaces/
//step#1
/*interface Ihuman{
    name:string;
    age:number;
    eat();
}
//those properties and method declare in interface must be in class also.
class human implements Ihuman{
    name:string="paraksh";
    age:number=20;
    eat(){
return console.log(this.name+" is a human. he can eat also. His age is "+this.age);
    }
}

var Human:human=new human();
Human.eat();*/
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var myresult = mySearch("parkash", "pr");
document.write("" + myresult);
/*For function types to correctly type-check, the name of the parameters do not need to match.
 We could have, for example, written the above example like this:

 var mySearch: SearchFunc;
 mySearch = function(src: string, sub: string) {
 var result = src.search(sub);
 if (result == -1) {
 return false;
 }
 else {
 return true;
 }
 }
 */ 
//# sourceMappingURL=lesson#3.js.map