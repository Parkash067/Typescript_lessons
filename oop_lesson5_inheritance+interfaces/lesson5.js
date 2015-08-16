/**
 * Created by PK on 8/14/2015.
 */
//step#1
/*interface biodata{
    name:string;
    age:number;
}
interface behaviour{
    run():string;
}
interface info extends biodata,behaviour{

}
class human implements info{
    name;
    age;
    run()
    {
        return this.name+" can run and he is "+this.age+" years old";

    }
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}
var obj:human=new human("parkash",23);
document.write("Name of a person is: "+obj.name+"<br>");
/!*
document.write("This person can do: "+obj.run());*!/
var fun=obj.run();
document.write("This person can do: "+fun);*/
/* a class declaration which implements an interface IMarksheetComponents. This class is responsible to
must implements all the functions and properties of this interface. */
var MarkSheet = (function () {
    // parameterized constructor which creates a marksheet object.
    function MarkSheet(studentName, tsMarks, aspMarks, htmlMarks) {
        this.studentName = studentName;
        this.tsMarks = tsMarks;
        this.aspMarks = aspMarks;
        this.htmlMarks = htmlMarks;
    }
    /* function declaration which returns student name. It has string as its return type, empty parameter-list
    and public access by default. */
    MarkSheet.prototype.getName = function () {
        return (this.studentName);
    };
    /* function declaration which returns total marks. It has number as its return type, empty parameter-list
    and public access by default. */
    MarkSheet.prototype.totalMarks = function () {
        return 300;
    };
    /* function declaration which returns obtain marks. It has number as its return type, empty parameter-list
    and public access by default. */
    MarkSheet.prototype.obtMarks = function () {
        return (this.tsMarks + this.aspMarks + this.htmlMarks);
    };
    /* function declaration which returns percentage. It has number as its return type, 2 number type
     parameters and public access by default. */
    MarkSheet.prototype.percentage = function (total, obtain) {
        return obtain / total * 100.0;
    };
    return MarkSheet;
})();
/* object creation of mark sheet 1, provide different kinds of information as arguments to its constructor. */
var markSheet = new MarkSheet("ABC", 85, 70, 80);
/* Following statements call the different functions of above class through its class reference
(reference variable) and also print them. */
document.write("Marksheet: <br/>");
document.write("Student name: " + markSheet.getName() + "<br/>");
document.write("TypeScript marks: " + markSheet.tsMarks + "<br/>");
document.write("Asp marks: " + markSheet.aspMarks + "<br/>");
document.write("Html marks: " + markSheet.htmlMarks + "<br/>");
document.write("Total marks: " + markSheet.totalMarks() + "<br/>");
document.write("Obtain marks: " + markSheet.obtMarks() + "<br/>");
document.write("Percentage: " + markSheet.percentage(markSheet.totalMarks(), markSheet.obtMarks()));
//# sourceMappingURL=lesson5.js.map