//sum of on array 

let numbers= [1,2,3,4,5,2,7,8,3,9,342]

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

}
console.log(sum);



// multiplying an array

let number= [1,2,3,4,5,2,7,8,3,9,342]

let multiple = number.reduce((accumulator,value)=>{
    return accumulator*value
})

console.log(multiple);


//finding odd and even number with function

// let mainArray = [ 2,4,5,8,7,2,9,11,33,25]

// const findEvenAndOdd = (num) =>{
//     let evenArray = [];
//     let oddArray = [];

// for (let i = 0; i < num.length; i++) {
//     if (num[i]%2==0) {
//         evenArray.push(num[i])
//    } else{
//        oddArray.push(num[i])
//    }
// }
//     console.log(`even numbers ${evenArray}`);
//     console.log(`odd numbers ${oddArray}`);
// }

// findEvenAndOdd(mainArray)




//without function

let num = [ 2,4,5,8,7,2,9,11,33,25]
let evenArray = []  
let oddArray = []

for (let i = 0; i < num.length; i++) {
    
    if (num[i]%2==0) {
        evenArray.push(num[i])
   } else{
       oddArray.push(num[i])
   }
}

console.log(`even numbers ${evenArray}`);
console.log(`odd numbers ${oddArray}`);
