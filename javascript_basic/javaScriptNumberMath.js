const averagePeopleIncome = 320000.2589;
// console.log(averagePeopleIncome.toFixed(2))  

// console.log(averagePeopleIncome.toLocaleString());
// console.log(averagePeopleIncome.toLocaleString('en-IN'));



////////////////////////// JavaScript Maths /////////////////////////
// static methods
//(1) Math.abs()=> returns a absolute of Number
// console.log(Math.abs(-25));// will be +ve
// console.log(Math.abs(9)); // Output:9

//(2) Math.pow()=> return the power of Number , by reising the second argument. Power of 1st argument.
// let getSqure = 23;
// let output = Math.pow(getSqure,2);
// console.log(output);

// let squreOfNumber = Math.pow(14,2);
// console.log(squreOfNumber);
// console.log(Math.pow(3,3));

//(3) Math.ceil()=>mathod rounds a decimal number up to the next largest and returns it.
// let getNum = 9.3;
// console.log(getNum);
// // console.log(Math.ceil(getNum));

// getNum = 3.8;
// console.log(Math.ceil(getNum));


//(4) Math.floor()=> function rounds down a number to the next smallest integer.
// let downNumber = 4.4;
// console.log(Math.floor(downNumber));

// downNumber = 7.8;
// console.log(Math.floor(downNumber));

//(5) Math.max()=> returns the largest value among the given numbers.
// console.log(Math.max(6,8,4,3));
// const mArray = [2,14,9,25,4,7];
// let out = Math.max(...mArray);
// console.log(out);

//(6) Math.min => returns the minimum value among the given numbers.
// let findMinNumber = Math.min(12,3,6,27,2,34);
// console.log(findMinNumber)

// findMinNumber = [9,47,25,1,8];
// console.log( Math.min(...findMinNumber));


//(7) Math.round()=> Returns the number rounded to the nearest integer.
// console.log(Math.round(4.2));
// console.log(Math.round(4.5));
// console.log(Math.round(4.7));
// console.log(Math.round(-4.3));



//(8) Math.sqrt()=> returns the squre root of a specified number.
// console.log(Math.sqrt(729));
// console.log(Math.sqrt(529));
// console.log(Math.sqrt(441));


//(9) Math.random()=>this function returns a floating-point, pseudo-random number between 0 and 1;

// let  getA_randomNumber = Math.random();
// // console.log(getA_randomNumber);

// // Example-> Q- Generate a random number between two numbers;
// let generateRandomNumber = (min,max)=>{
//     let number = Math.random()*(max-min) + min;
   
//     return  number;
// }; 


// let out = generateRandomNumber(10,15);
// console.log(out.toFixed(2)*100);