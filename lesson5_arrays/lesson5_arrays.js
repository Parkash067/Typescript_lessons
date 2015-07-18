/**
 * Created by PK on 7/18/2015.
 */
//syntax
//let array_name:datatype[]=[];
//let array_name:Array<datatype> = [1, 2, 3];//alternative correct syntax
//step#1
var mixed_array = [1, "string", true, ["abc"], {}]; //mixed array as in js
for (var i = 0; i < mixed_array.length; i++) {
    document.write("mixed array: " + mixed_array[i] + "<br>");
}
document.write("array=" + mixed_array[3]);
document.write("" + 2); //note this is an interesting thing.you can pass number in document.write() method by concate with empty string
//step#2
/*let number_array:number[]=[1,3];
number_array.push(5,6);
//number_array.push("string");//error because array type is number
console.log(number_array);*/
//step#3 associative array
var asso_array = ["dfe"];
asso_array["educated people"] = 40;
asso_array["illiterate people"] = "heloworld";
asso_array["good people"] = true;
asso_array["Intermediate people"] = 50;
console.log("asso_arraY: " + asso_array["good people"]);
//# sourceMappingURL=lesson5_arrays.js.map