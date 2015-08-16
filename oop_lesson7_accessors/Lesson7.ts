/**
 * Created by PK on 8/14/2015.
 */
    //step#1
/*class signup
{
    private name:string="parkash";
    private age:number=22;//by default accessors are public

        data(){
            return this.name+"and age is   "+this.age;

            }
}
 class biodata extends signup{
     address:string;
 }
var obj:biodata=new biodata();
obj.address="Karachi center near pib colony";
var obj1:signup=new signup();
var result=obj1.data();
document.write("Name of a person is "+ result);*/

//step#2
/*
class MarkSheet {

    /!* properties declaration of different types. Notice: the following properties are marked as “protected” and only are accessed in derived class.*!/
    protected studentName: string;
    protected tsMarks: number;
    protected aspMarks: number;

    /!* Parametrized constructor declaration. It constructs the base class mark sheet object. 3 parameters are passed in this constructor.*!/
    constructor(studentName: string, tsMarks: number, aspMarks: number) {
        this.studentName = studentName;
        this.tsMarks = tsMarks;
        this.aspMarks = aspMarks;
    }

    /!* Return type functions which returns each subject marks. Notice these functions are explicitly marked as “public”. *!/
    public getTsMarks(): number {
        return this.tsMarks;
    }

    public getAspMarks(): number {
        return this.aspMarks;
    }

    /!* function declaration which returns student name. It has string as its return type, empty parameter-list and public access by default. *!/
    getName(): string {
        return (this.studentName);
    }
    /!* function declaration which returns total marks. It has number as its return type, empty parameter-list and “protected” access. This function is accessible and is re-implemented in a derived class. *!/
    protected totalMarks(): number {
        return 200;
    }

    /!* function declaration which returns obtain marks. It has number as its return type, empty parameter-list and “protected” access. This function is accessible and is re-implemented in a derived class. *!/
    protected obtMarks(): number {
        return (this.tsMarks + this.aspMarks);
    }

    /!* function declaration which returns percentage. It has number as its return type, 2 number type parameters and “public” access by default. *!/
    percentage(total: number, obtain: number): number {
        return obtain / total * 100.0;

    }
}

/!* Following is another class BcsMarksheet declaration, notice its syntax here it is inheriting a MarkSheet class means BcsMarksheet class is a derived or child class of MarkSheet and MarkSheet class is a base or parent class of BcsMarkSheet, so all the public members of base MarkSheet class is now exists in derived BcsMarksheet class and can be access through BcsMarksheet object reference. *!/
class BcsMarksheet extends MarkSheet {

    /!* 2 properties are declared in this derived class and marked as a “private”. *!/
    private htmlMarks: number;
    private javaMarks: number;

    /!* Parametrized constructor declaration. It constructs the derived class mark sheet object. 5 parameters are passed in this constructor.*!/
    constructor(studentName: string, tsMarks: number, aspMarks: number, htmlMarks: number, javaMarks: number) {

        this.htmlMarks = htmlMarks;
        this.javaMarks = javaMarks;

        /!* Notice: super () keyword calls a base class constructor. Here the super () keyword is initializing/constructs the portion of a base class/object through this derived class constructor. 3 arguments are passed in super (), these 3 arguments will be received to base class constructor in order to construct a base class. *!/
        super(studentName, tsMarks, aspMarks);
    }

    /!* Return type functions which returns each subject marks. Notice these functions are explicitly marked as “public”. *!/
    public getHtmlMarks(): number {
        return this.htmlMarks;
    }

    public getJavaMarks(): number {
        return this.javaMarks;
    }

    /!* following functions is re-implemented in this class. This process is called function overriding. Notice: here a “super” keyword is being used which is calling its base class function via a dot (.) sign and also add it with html and java marks. *!/
    obtMarks(): number {
        return (super.obtMarks() + this.htmlMarks + this.javaMarks);
    }

    /!* following functions is re-implemented in this class. This process is called function overriding. Notice: here a “super” keyword is being used which is calling its base class function via a dot (.) sign and also add it with 200 value. *!/
    totalMarks(): number {
        return super.totalMarks() + 200;
    }
}

/!* object creation of Bcs mark sheet. This object is being created through a parametrized constructor. Different types of mark sheet information such as (subject marks, student name etc.) are passed in this constructor as arguments. *!/
var bcsMarksheet: BcsMarksheet = new BcsMarksheet("Abc", 85, 70, 65, 55);

/!* Following statements call the different functions of above class through its derived class reference (reference variable) and also print them. *!/
document.write("Bcs Mark sheet: <br/>");

document.write("Student name: " + bcsMarksheet.getName() + "<br/>");
document.write("TypeScript marks: " + bcsMarksheet.getTsMarks() + "<br/>");
document.write("Asp marks: " + bcsMarksheet.getAspMarks() + "<br/>");
document.write("Html marks: " + bcsMarksheet.getHtmlMarks() + "<br/>");
document.write("Java marks: " + bcsMarksheet.getJavaMarks() + "<br/>");

document.write("Total marks: " + bcsMarksheet.totalMarks() + "<br/>");
document.write("Obtain marks: " + bcsMarksheet.obtMarks() + "<br/>");
document.write("Percentage: " + bcsMarksheet.percentage(bcsMarksheet.totalMarks(), bcsMarksheet.obtMarks()));*/

//step#3
/*class Planguages { // A class declaration

    /!* Declaration of different types of properties with “private” access modifier. *!/
    private typeScript: string;
    private jQuery: string;
    private html: string;
    private php: string;

    constructor(typeScript: string, jQuery: string, html : string, php :string) {
        this.typeScript = typeScript;
        this.jQuery = jQuery;
        this.html = html;
        this.php = php;
    }

    /!* following are different four void type functions implementation with “private” access, each function is displaying a programming language name. *!/
    private getTypeScript():void {
        document.write("Programming language 1: " + this.typeScript + "<br/>");
    }

    private getJquery(): void {
        document.write("Programming language 2: " + this.jQuery + "<br/>");
    }

    private getHtml(): void {
        document.write("Programming language 3: " + this.html + "<br/>");
    }

    private getPhp(): void {
        document.write("Programming language 4: " + this.php);
    }

    /!* A void type “public” function declaration which is accessing/calling above “private” functions through “this” keyword reference. These “private” functions will be called automatically when a call will be made to this function. *!/
    public showAll(): void {
        this.getTypeScript();
        this.getJquery();
        this.getHtml();
        this.getPhp();
    }
}

/!* An object creation of above class through parameterized constructor. *!/
var planguage: Planguages = new Planguages("Type script", "JQuery", "Html", "Php");

// showAll() method is being called through an object reference.
planguage.showAll();*/
