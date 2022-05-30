// Iteration 1: Names and Input
let hacker1 = "evangelo";
console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "lokumi";
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
upperCase=upperCase.trimEnd()


function reverseString(s){
    return s.split("").reverse().join("");
}

upperCase = reverseString(upperCase);
console.log(upperCase);

/* my initial atttemp
if (hacker1 > hacker2) {
  console.log(`The driver's name goes first`);
} else if (hacker2 > hacker1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
} */

function lexico (name1, name2) {
  if (name1 > name2) {
    console.log(`The driver's name goes first`);
  } else if (name2 > name1) {
    console.log(`Yo, the navigator goes first definitely.`);
  } else {
    console.log(`What?! You both have the same name?`);
  }
}

lexico(hacker1, hacker2);

let mergedStrings = `${hacker1} ${hacker2}`;
let array = mergedStrings.split(' ');
array.sort();
 

//end 