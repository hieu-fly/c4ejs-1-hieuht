// const listWord = ['to', 'be', 'that', 'of', 'this', 'now', 'back', 'cool',
//     'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat',
//     'late', 'sorry', 'my', 'team'];
// let sum = 1;
// for (let i = 0; i < listWord.length; i++) {
//     let sum = 1;
//     for (let j = i + 1; j < listWord.length; j++) {
//         if (listWord[i] == listWord[j]) {
//             sum++;
//         }
//     }
//     console.log(listWord[i] + ": " + sum);
// }

const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567’',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    }];
let inventoryByBrand = {};
let dell = [];
let asus = [];
let hp = [];

for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].brand == 'Dell') {
        dell.push(inventory[i]);
    }
    if (inventory[i].brand == 'HP') {
        hp.push(inventory[i]);
    }
    if (inventory[i].brand == 'Asus') {
        asus.push(inventory[i]);
    }
}
inventoryByBrand.dell = dell;
inventoryByBrand.asus = asus;
inventoryByBrand.hp = hp;
console.log(inventoryByBrand)


let answer = prompt('Which brand?');
let answerLowerCase = answer.toLowerCase();
console.log("There are " + inventoryByBrand[answerLowerCase].length + " generations of '" + answerLowerCase + "' in inventory:");
let sum = 0;
for (let i = 0; i < inventoryByBrand[answerLowerCase].length; i++) {
    console.log(inventoryByBrand[answerLowerCase][i].name);
    sum += inventoryByBrand[answerLowerCase][i].price * inventoryByBrand[answerLowerCase][i].quantity;
} console.log("With total value: " + sum * 1000 + "VND");



