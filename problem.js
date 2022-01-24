//sum of on array #
// # problem 1

let numbers= [1,2,3,4,5,2,7,8,3,9,342]

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

}
console.log(sum);



// multiplying an array

//# problem 2

let number= [1,2,3,4,5,2,7,8,3,9,342]

let multiple = number.reduce((accumulator,value)=>{
    return accumulator*value
})

console.log(multiple);


//finding odd and even number with function

//problem 3

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

//reverse an array

//problem 4

let array = ["Hello" , "world" , 34, true ]

let reverse= array.reverse();
console.log(reverse);

//serialize from sort to big
//problem 5

let numberArray = [4,40,30,58,423];
let serialize = numberArray.sort((a,b) => {return a-b})

console.log(serialize);

//serialize from big to short

//problem 6

let intArray = [4,40,30,58,423];
let serializeBig = intArray.sort((a,b) => {return b-a})

console.log(serializeBig);




//problem 9

//remove duplicate number

let withDuplicate = [34,43,45,34,56,56,74,34,65,74]

let withOutDuplicate = []

for (let index = 0; index < withDuplicate.length; index++) {
    const element = withDuplicate[index];
    if (withOutDuplicate.indexOf(element)== -1) {
        withOutDuplicate.push(element)
    } 
}
console.log(withOutDuplicate);







