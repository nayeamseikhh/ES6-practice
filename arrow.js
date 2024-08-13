// ///function exprassion////
// function doubleIt(num){
//     return num * 2 ;
// }

// ///function declaration///
// const doubleIt  = function(num){
//     return num * 2;
// }

//arrow function
const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const results = sum * diff;
    return results;
}


const result = doubleIt(654);
const result1 = add(50, 67);
const result2 = give5();
const results = doMath( 745, 554 );

console.log(result,result1,result2, results);