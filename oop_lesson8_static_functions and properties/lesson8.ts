/**
 * Created by PK on 8/15/2015.
 */
//step#1
/*
class  car{
    static name:string="civic";
    static model:number=2015;
    static pickup()
    {
        document.write("Hundred miles per hour");
    }
}
 document.writeln("Name: "+car.name);
document.writeln("<br>Model "+car.model);
car.name="Accord";
car.model=2019;
document.writeln("<br><br>Name: "+car.name);
document.writeln("<br>Model "+car.model);*/

//step#2
let a=3;
class Calculator { // A class declaration

    /* Following are two number type private properties which are marked as “static”. */
    private static _V1: number;
    private static _V2: number;

    /* Following are “static” getter and setter accessors which are setting and returning two digit values. */
    static get v1(): number {
        return Calculator._V1;
    }

    static set v1(value: number) {
        Calculator._V1 = value;
    }

    static get v2(): number {
        return Calculator._V2;
    }

    static set v2(value: number) {
        Calculator._V2 = value;
    }

    /* Following are number return type functions. These functions are declared as “static” functions and perform basic calculator operations.*/
    static add(): number {

        return Calculator.v1 + Calculator.v2;
    }

    static substract(): number {

        return Calculator.v1 - Calculator.v2;
    }

    static multiply(): number {

        return Calculator.v1 * Calculator.v2;
    }

    static divide(): number {

        return Calculator.v1 / Calculator.v2;
    }
}

/* Following statements call two static “set” accessors v1 and v2 and set different values to private properties for calculations. Notice: these two property “set” accessors are called through a class name (Calculator) reference. */
Calculator.v1 = 10;
Calculator.v2 = 5;

/* Following, property’s “get” accessors and different calculation functions are being called through a class name reference and also display different results. */
document.write("Addition: "+ Calculator.v1 + " + " + Calculator.v2 + " = " +Calculator.add() + "<br/>");
document.write("Substraction: " + Calculator.v1 + " - " + Calculator.v2 + " = " + Calculator.substract() + "<br/>");
document.write("Multiplication: " + Calculator.v1 + " * " + Calculator.v2 + " = " + Calculator.multiply() + "<br/>");
document.write("Division: " + Calculator.v1 + " / " + Calculator.v2 + " = " + Calculator.divide());