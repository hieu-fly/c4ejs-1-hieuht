// //1
// let numberRandom = Math.random();
// console.log(numberRandom);
// //2
// let ar = [2, 5, 6, 8, 10];
// let random = ar[Math.floor(Math.random() * ar.length)];
// console.log(random);
// //3
// let question = [{
//     question: "what's ur name?",
//     choice: ["1. hieu", "2. trung", "3. nam", "4. viet"],
//     answer: 1
// },
// {
//     question: "Address?",
//     choice: ["1. vietnam", "2. hanoi", "3. saigon", "4. sontay"],
//     answer: 3
// },
// {
//     question: "age?",
//     choice: ["1. 18", "2. 19", "3. 20", "4. 21"],
//     answer: 4
// },
// {
//     question: "class?",
//     choice: ["1. a", "2. b", "3. c", "4. d"],
//     answer: 2
// }];
// //5,6,7

// let sum1 = 0;
// while(question.length > 0){
//     let randomNumber = Math.floor(Math.random() * question.length);
//     console.log(randomNumber);
//     for (let i = 0; i < question.length; i++) {
//         let question1 = prompt(question[randomNumber].question + "\n" + question[randomNumber].choice[0] + "\n"
//             + question[randomNumber].choice[1] + "\n"
//             + question[randomNumber].choice[2] + "\n"
//             + question[randomNumber].choice[3]);
//         if (question1 == question[randomNumber].answer) {
//             alert("Bravo");
//             question.splice(randomNumber, 1)
//             sum1 += 1;
//         } else {
//             alert('Good luck next time!');
//             question.splice(randomNumber, 1)
//             // break;
//         }
//     }
// } alert('Out of question');
// alert("Right answer: " + sum1);