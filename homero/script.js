// Excercise1
//first way
let a = 5, b = 6;
console.log(a, b);
b = [a, a = b][0];
console.log(a, b);
//second way
let a1 = 5, b1 = 6;
console.log(a1, b1);
[a1, b1] = [b1, a1]
console.log(a1, b1);
//excercise 2
const s = "Heloo beauty there";
let result2 = s.split(" ");
console.log(result2);
//excercise3
const a2 = [4, 5, 7, -8];
console.log(...a2);
//Ecercise 4
// let ar = ["Jeans", "T-shirt", "Shocks"];
// while(true){

//     let s = prompt("Enter CRUD:");
//     if (s == 'r') {
//         console.log("The current item is:");
//         for (let i = 0; i < ar.length; i++) {
//             console.log((i + 1) + ". " + ar[i]);
//         }
//     } else if (s == 'c') {
//         let s1 = prompt("Enter the name of the new item");
//         ar.push(s1);
//         alert('Done');
//     } else if (s == 'u') {
//         let n1 = Number(prompt('Enter the position you want to update'));
//         let s2 = prompt('Enter the new name');
//         ar[n1 - 1] = s2;
//         alert('Done');
//     } else if (s == 'd') {
//         let n2 = Number(prompt('Enter the position you want to delete'));
//         ar.splice(n2);
//         alert('Done');

//     } else {
//         alert('This command is not supported')
//     }
// }

//Excercise 5
let number = prompt("Enter a number");

let ar1 = number.split(",")
let sum = 0;
for (let i = 0; i < ar1.length; i++) {
    let n = parseInt(ar1[i]);
    sum += n;
}
alert(sum);
// //Excercise 6
let number1 = prompt("Enter a number");
let ar2 = number1.split(",")
let min = ar2[0];
for(let i = 0; i < ar2.length; i++){
    if(ar2[i] < min){
        min = ar2[i];
    }
}
alert(min);
//Excercise 7
const arr=[3,4,6,-9,10,-88,2];
let found = false;
let an = Number(prompt("Enter a number"))
for(let i = 0; i < arr.length; i++){
    if(arr[i] == an){
        alert(an + " is FOUND in my array at index " + i);
        found = true;
        break;
    } 
} if(!found){
    alert('not found');
}
//Excercise 8
let sheeps = [5, 7, 300, 90, 24, 50, 75];
console.log("hello my name is Hieu and here is my sheep size:");
console.log(sheeps);
let max = Math.max(...sheeps);
console.log("Now my biggest sheep has size :", max);
let index = sheeps.indexOf(max);
sheeps[index] = 8;
console.log("after shearing, here is my flock: ");
console.log(sheeps);
sum = 0;
for (let x = 0; x < 4; x++) {
    for (let j = 0; j < sheeps.length; j++) {
        sheeps[j] += 50;
        if (x == 3) {
            sum += sheeps[j];
        }
    }
    console.log("Month", x + 1);
    console.log("One month has passed, my sheeps has grown, here are their sizes: ");
    console.log(sheeps);
    if (x <= 2) {
        let max = Math.max(...sheeps);
        console.log("Now my biggest sheep has size :", max);
        let index = sheeps.indexOf(max);
        sheeps[index] = 8;
        console.log("after shearing, here is my flock:");
        console.log(sheeps);
    }
}
console.log("My flock has size in total: ", sum);
let money = sum * 2;
console.log("I would get", sum, "* 2$", " = ", money);

//excercise 10
let number3 = prompt("Enter a number");
let ar4 = number3.split(",")
const result1 = ar4.map(x => "<"+x+">");
alert(ar4.toString() + " => " + result1.toString());
//excercise 11
let number2 = prompt("Enter a number");
let ar3 = number2.split(",")
console.log(ar3);
const result = ar3.filter(i => ar3[i] % 2 == 0);
alert(ar3.toString() + " => " + result.toString());