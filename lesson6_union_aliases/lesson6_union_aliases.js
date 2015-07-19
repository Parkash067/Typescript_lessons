/**
 * Created by PK on 7/19/2015.
 */
//step#1 union_types
//union types are custom data_types can hold more than two types of data , '|' pipe symbol use to define data_types
var a = [3];
if (typeof a == "string") {
    console.log("variable is a string type and its value is: " + a);
}
else if (typeof a == "number") {
    console.log("variable is a number type and its value is: " + a);
}
else if (typeof a == "boolean") {
    console.log("variable is a bool type and its value is: " + a);
}
else if (typeof a == "object") {
    console.log("variable is a object_array type and its value is: " + a[0]);
}
//now string_number_bool is a datatype which hold three types of data
var aliase_type;
aliase_type = 1;
console.log(aliase_type);
aliase_type = false;
console.log(aliase_type);
//# sourceMappingURL=lesson6_union_aliases.js.map