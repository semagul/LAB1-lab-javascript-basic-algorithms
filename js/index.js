// Iteration 1: Names and Input
let hacker1 = "suzy";
console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "jojel";
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters!`);
} else if (hacker2.length > hacker1.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters!`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1} characters!`);
}

// Iteration 3: Loops
let upperCase = "";
for (let i = 0; i < hacker1.length; i++) {
   upperCase += hacker1[i].toUpperCase() + " ";
}
console.log(upperCase);

function reverseString(s){
    return s.split("").reverse().join("");
}

reverseString(upperCase);

let mergedStrings = `${hacker1} ${hacker2}`;
let array = mergedStrings.split(' ');
array.sort();
 