// program to generate a multiplication table

// problem 7

{
    let userInput = Number(prompt("Enter a number : "))

    for (let i = 1; i <= 10; i++) {
        const element = i * userInput  
        console.log(`${userInput} * ${i} = ${element}`);
    }
}


//  program to generate a multiplication table upto a range

// problem 8

let input = Number(prompt("Enter a number : "))

let range = Number(prompt("enter a range :"))

for (let i = 1; i <= range; i++) {
    const element = i * input;
    console.log(`${input} * ${i} = ${element}`);
}