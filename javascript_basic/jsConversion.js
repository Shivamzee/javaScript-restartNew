/*In programming, type conversion is the process of converting data of one type to another. For example: converting String data to Number.

There are two types of type conversion in JavaScript.

1)Implicit Conversion - automatic type conversion
2)Explicit Conversion - manual type conversion
*/


/***********************
 //1)Implicit Conversion
 //Example : Implicit Conversion to Number

let implicitConversionOfNumber ;

implicitConversionOfNumber = '4' * 2;
//console.log(implicitConversionOfNumber); // 8

implicitConversionOfNumber = '4' / 2; 
//console.log(implicitConversionOfNumber); // 2


// **ImpNote**
// Arithmetic operation of undefined with number, boolean or null gives NaN
//If we use non-numeric string with - , / , * results will NaN.
// Example:
let nonNumericString = "Courage" - "Fear";
//console.log(nonNumericString);//NaN
nonNumericString = "bravery" / "NoPostpone"
//console.log(nonNumericString);//NaN

//Boolean
// **Note: JavaScript considers 0 as false and all non-zero number as true. And, if true is converted to a number, the result is always 1.

//null
// null is 0 when used with number
*********************/




// (2)Explicit Conversion
// You can also convert one data type to another as per your needs. The type conversion that you do manually is known as explicit type conversion.

/*
//Example 
let convertStringToNumber = "482";
console.log(typeof convertStringToNumber);
convertStringToNumber = Number(convertStringToNumber)
console.log(typeof convertStringToNumber);
*/

/*
//Example
//In JavaScript, empty strings and null values return 0. For example,

let result;
result = Number(null);
console.log(result);  // 0

let result = Number(' ')
console.log(result);  // 0
*/





let score = 88;
//  console.log(typeof score);
//  console.log(typeof (score));

score = "55";
//  console.log(typeof score);
//  console.log(typeof (score));

let valueInNumber = Number(score);
//  console.log(typeof valueInNumber , score);
//  console.log(typeof (score));

// Learn about null
let checkTypeOfNull = null;
// console.log(typeof checkTypeOfNull ,  checkTypeOfNull);

checkTypeOfNull = Number(checkTypeOfNull);
// console.log(typeof checkTypeOfNull ,  checkTypeOfNull);

// Now learn about undefind
let checkTpyeOfundefind = undefined;
//console.log(checkTpyeOfundefind , typeof checkTpyeOfundefind);

let convertUndefindIntoNumber = Number(checkTpyeOfundefind);
// console.log(convertUndefindIntoNumber , typeof convertUndefindIntoNumber);

// Now Learn about boolean type
let checkTypeOfBooleanValue = true;
// console.log(checkTypeOfBooleanValue , typeof checkTypeOfBooleanValue);

let convertBooleanIntoNumber = Number(checkTypeOfBooleanValue);
// console.log(convertBooleanIntoNumber , typeof convertBooleanIntoNumber);

let checkTypeOfBooleanValueFalse = false;
// console.log(checkTypeOfBooleanValue , typeof checkTypeOfBooleanValue);

let convertBooleanfalseIntoNumber = Number(checkTypeOfBooleanValue);
// console.log(convertBooleanIntoNumber , typeof convertBooleanIntoNumber);

// Let convert into string..
let numberToConvertIntoString = 55;
// console.log(numberToConvertIntoString, typeof numberToConvertIntoString); 

let convertNumberIntoString = String(numberToConvertIntoString);
// console.log(convertNumberIntoString, typeof convertNumberIntoString);



let convertToNumber = 'shivam';
console.log(typeof convertToNumber);
 let check =  Number(convertToNumber) ;
 console.log(check);
// console.log(typeof check);