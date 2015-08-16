/**
 * Created by PK on 8/14/2015.
 */
    //step#1
  class maths{
    first_number:number;
    second_number:number;
    operation():number{
        return this.first_number+this.second_number;
    }
     constructor(operand1:number,operand2:number)
    {
        this.first_number=operand1;
        this.second_number=operand2;
    }
}

class maths_override  extends maths{
   operation():number{
       return this.first_number-this.second_number;
   }
    constructor(operand1:number,operand2:number)
    {
        super(operand1,operand2);
        this.first_number=operand1;
        this.second_number=operand2;


    }
    basevalue()
    {
        return super.operation();
    }

}
/*var obj1:maths=new maths(2,5);
var result_obj1=obj1.operation();
document.write("The result after applying an operation is: "+result_obj1);*/
var  obj2:maths_override=new maths_override(5,3);
var result_obj2=obj2.operation();
document.write("<br>The result after applying an operation is: "+result_obj2);
var result_base=obj2.basevalue();
document.write("<br>The result after applying an operation is: "+result_base);
//step#2
// a class declaration. This is a base class.
/*
class MarkSheet {

    // properties declaration of different types.
    studentName: string;
    tsMarks: number;
    aspMarks: number;

    /!* function declaration which returns student name. It has string as its return type, empty parameter-list
    and public access by default. *!/
    getName(): string {
        return (this.studentName);
    }

    /!* function declaration which returns total marks. It has number as its return type, empty parameter-list
    and public access by default. This function is re-implemented by a derived class. *!/
    totalMarks(): number {
        return 300;
    }

    /!* function declaration which returns obtain marks. It has number as its return type,
    empty parameter-list and public access by default. This function is re-implemented by a derived class.*!/
    obtMarks(): number {
        return (this.tsMarks + this.aspMarks);
    }

    /!* function declaration which returns percentage. It has number as its return type,
    2 number type parameters and public access by default. *!/
    percentage(total: number, obtain: number): number {
        return obtain / total * 100.0;

    }
}

/!* Following is another class BcsMarksheet declaration, notice its syntax here it is inheriting
 a MarkSheet class means Bcs Marksheet class is a derived or child class of MarkSheet and MarkSheet
 class is a base or parent class of BcsMarkSheet, so all the public members of base MarkSheet class is now exists
  in derived BcsMarksheet class and can be access through BcsMarksheet object reference. *!/
class BcsMarksheet extends MarkSheet {

    // 2 properties are declared in this derived class.
    htmlMarks: number;
    javaMarks: number;

    /!* following functions is re-implemented in this class. This process is called function overriding. *!/
    obtMarks(): number {
        return (this.tsMarks + this.aspMarks + this.htmlMarks + this.javaMarks);
    }

    /!* following functions is re-implemented in this class. This process is called function overriding. *!/
    totalMarks(): number {
        return 400;
    }
}

// object creation of Bcs mark sheet with default constructor.
var bcsMarksheet: BcsMarksheet = new BcsMarksheet();

/!* Following statements call the different functions of above class through its derived class reference
(reference variable) and also print them. *!/
document.write("Bcs Mark sheet: <br/>");

bcsMarksheet.studentName = "Abc";
bcsMarksheet.tsMarks = 85;
bcsMarksheet.aspMarks = 70;
bcsMarksheet.htmlMarks = 65;
bcsMarksheet.javaMarks = 55;

document.write("Student name: " + bcsMarksheet.getName() + "<br/>");
document.write("TypeScript marks: " + bcsMarksheet.tsMarks + "<br/>");
document.write("Asp marks: " + bcsMarksheet.aspMarks + "<br/>");
document.write("Html marks: " + bcsMarksheet.htmlMarks + "<br/>");
document.write("Java marks: " + bcsMarksheet.javaMarks + "<br/>");

document.write("Total marks: " + bcsMarksheet.totalMarks() + "<br/>");
document.write("Obtain marks: " + bcsMarksheet.obtMarks() + "<br/>");
document.write("Percentage: " + bcsMarksheet.percentage(bcsMarksheet.totalMarks(), bcsMarksheet.obtMarks()));


*/


//step#3
// a class declaration. This is a base class.
class MarkSheet {

    // properties declaration of different types.
    studentName: string;
    tsMarks: number;
    aspMarks: number;

    /* Parametrized constructor declaration. It constructs the base class mark sheet object. 3 parameters are passed in this constructor.*/
    constructor(studentName: string, tsMarks: number, aspMarks: number) {
        this.studentName = studentName;
        this.tsMarks = tsMarks;
        this.aspMarks = aspMarks;
    }

    /* function declaration which returns student name. It has string as its return type, empty parameter-list and public access by default. */
    getName(): string {
        return (this.studentName);
    }

    /* function declaration which returns total marks. It has number as its return type, empty parameter-list and public access by default. This function is re-implemented by a derived class. */
    totalMarks(): number {
        return 200;
    }

    /* function declaration which returns obtain marks. It has number as its return type, empty parameter-list and public access by default. This function is re-implemented by a derived class.*/
    obtMarks(): number {
        return (this.tsMarks + this.aspMarks);
    }

    /* function declaration which returns percentage. It has number as its return type, 2 number type parameters and public access by default. */
    percentage(total: number, obtain: number): number {
        return obtain / total * 100.0;

    }
}

/* Following is another class BcsMarksheet declaration, notice its syntax here it is inheriting a MarkSheet class means BcsMarksheet class is a derived or child class of MarkSheet and MarkSheet class is a base or parent class of BcsMarkSheet, so all the public members of base MarkSheet class is now exists in derived BcsMarksheet class and can be access through BcsMarksheet object reference. */
class BcsMarksheet extends MarkSheet {

    // 2 properties are declared in this derived class.
    htmlMarks: number;
    javaMarks: number;

    /* Parametrized constructor declaration. It constructs the derived class mark sheet object. 5 parameters are passed in this constructor.*/
    constructor(studentName: string, tsMarks: number, aspMarks: number, htmlMarks: number, javaMarks: number) {

        this.htmlMarks = htmlMarks;
        this.javaMarks = javaMarks;

        /* Notice: super () keyword calls a base class constructor. Here the super () keyword is initializing/constructs the portion of a base class/object through this derived class constructor. 3 arguments are passed in super (), these 3 arguments will be received to base class constructor in order to construct a base class. */
        super(studentName, tsMarks, aspMarks);
    }

    /* following functions is re-implemented in this class. This process is called function overriding. Notice: here a “super” keyword is being used which is calling its base class function via a dot (.) sign and also add it with html and java marks. */
    obtMarks(): number {
        return (super.obtMarks() + this.htmlMarks + this.javaMarks);
    }

    /* following functions is re-implemented in this class. This process is called function overriding. Notice: here a “super” keyword is being used which is calling its base class function via a dot (.) sign and also add it with 200 value. */
    totalMarks(): number {
        return super.totalMarks() + 200;
    }
}

/* object creation of Bcs mark sheet. This object is being created through a parametrized constructor. Different types of mark sheet information such as (subject marks, student name etc.) are passed in this constructor as arguments. */
var bcsMarksheet: BcsMarksheet = new BcsMarksheet("Abc", 85, 70, 65, 55);

/* Following statements call the different functions of above class through its derived class reference (reference variable) and also print them. */
document.write("Bcs Mark sheet: <br/>");

document.write("Student name: " + bcsMarksheet.getName() + "<br/>");
document.write("TypeScript marks: " + bcsMarksheet.tsMarks + "<br/>");
document.write("Asp marks: " + bcsMarksheet.aspMarks + "<br/>");
document.write("Html marks: " + bcsMarksheet.htmlMarks + "<br/>");
document.write("Java marks: " + bcsMarksheet.javaMarks + "<br/>");

document.write("Total marks: " + bcsMarksheet.totalMarks() + "<br/>");
document.write("Obtain marks: " + bcsMarksheet.obtMarks() + "<br/>");
document.write("Percentage: " + bcsMarksheet.percentage(bcsMarksheet.totalMarks(), bcsMarksheet.obtMarks()));
