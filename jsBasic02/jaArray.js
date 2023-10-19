// Javascript filter()
// Its an array method


// Q-find the largest numbers from three numbers.
let largestNum = (a,b,c) =>{
    let makeArray = [a,b,c];
    let knowBigNum = makeArray.filter(e =>{
        if (a >b && a>c ) {
            console.log(`Largest number is: ${a}`);
        } else if(b>a && b>c) {
            console.log(`Largest number is: ${b}`);
        } else if(c>a && c>b){
            console.log(`Largest number is: ${c}`);
        }else{
            console.log("Try again");
        }
    })
}

largestNum("1ss",true,7)