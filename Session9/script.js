//STUDY
//1
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise is da best');
    }, 1000);
});
promise.then(function (value) {
    console.log(value);
});

async function p() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise is da best"), 1000)
    });
    let result = await promise;
    console.log(result);
}
p();
//2
const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
const fetchPromise = fetch(url);
fetchPromise.then(async connection => {
    console.log('Connected');
    console.log(connection);
    const jsonPromise = await connection.json();
    console.log(jsonPromise);
});
//3
https://sheetdb.io/api/v1/qfgqb2vzgyx0b

//REVIEW
//4
function randomNumber() {
    return Math.floor(Math.random() * 10);;
}
const x = randomNumber();
console.log(x);
if (x < 4) {
    console.log("Failed: the number is smaller than 4");
} else if (x > 16) {
    console.log("Failed: the number is bigger than 16");
} else {
    console.log("Passed, bravo");
}
console.log("---------------------------------");
//5
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
const x1 = getRandom(4, 16);
if (x1 < 4) {
    console.log('Failed: the number is smaller than 4');
} else if (x1 > 16) {
    console.log('Failed: the number is bigger than 16');
} else {
    console.log('Passed, bravo');
}

console.log("----------------------------------");


//6
function distanceCal(a, b, c, d) {
    return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d));;
}
const d = distanceCal(3, 10, 0, 6);
if (d !== 5) {
    console.log('Failed: the calculation is wrong');
} else {
    console.log('Passed, bravo');
}
console.log("----------------------------------");

//Serious Excercise

//7
const author = document.getElementById('author');
const quote = document.getElementById('quote')
const url1 = 'http://quotes.rest/qod.json';
async function loadQuote() {
    const conn = await fetch(url1);
    const data = await conn.json();
    showQuote(data)
}
loadQuote();
function showQuote(data) {
    const pQuote = document.createElement('p');
    pQuote.innerHTML = data.contents.quotes[0].quote;   
    quote.appendChild(pQuote);
    const pAuthor = document.createElement('p');
    pAuthor.innerHTML =  data.contents.quotes[0].author;
    author.appendChild(pAuthor);
}
// //8
const itemInput = document.getElementById('itemInput');
const addbtn = document.getElementById('add');
const ol = document.getElementById('wish_list');
var API_URL = 'https://sheetdb.io/api/v1/5hpe2mllul72r';
function id() {
    const x = Math.random();
    const y = x.toString(36);
    const id = y.substr(2, 6);
    return id;
}
//POST
addbtn.addEventListener('click', addWish);
async function addWish() {

    const zz = id();
    ol.insertAdjacentHTML('beforeend', `<li id="wish_${zz}">${itemInput.value}<button id="${zz}">X</button></li>`);

    const newWish = {
        id: zz,
        wish: `${itemInput.value}`
    };
    const body = {
        data: [
            newWish
        ]
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const conn = await fetch(API_URL, options);
    const data = await conn.json();
    console.log(data);
    //DELETE
    const btnID = document.getElementById(`${zz}`);
    btnID.addEventListener('click', removeWish);
    async function removeWish() {
        document.getElementById(`wish_${zz}`).remove();
        const DELETE_URL = API_URL + `/id/${zz}`;
        const options = {
            method: 'DELETE',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const conn = await fetch(DELETE_URL, options);
        const data = await conn.json();
        console.log(data);
    }
}
//READ
async function readData() {
    const conn = await fetch(API_URL);
    const data = await conn.json();
    console.log(data);
    showData(data);
}
function showData(data) {
    for (let i = 0; i < data.length; i++) {
        ol.insertAdjacentHTML('beforeend', `<li id="wish_${data[i].id}">${data[i].wish}<button id="${data[i].id}">X</button></li>`);
    }
}



