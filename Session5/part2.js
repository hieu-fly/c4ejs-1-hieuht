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

const inventoryByBrand = {
    dell: [
        {
            name: 'Dell XPS 9370',
            price: 30000,
            brand: 'Dell',
            quantity: 1,
        },
        {
            name: 'Dell Inspiron 3567',
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
    ],
    hp: [
        {
            name: 'HP Envy 13aq',
            price: 21000,
            brand: 'HP',
            quantity: 5,
        },
        {
            name: 'HP Pavilion',
            brand: 'HP',
            price: 14000,
            quantity: 7,
        },
    ],
    asus: [
        {
            name: 'Asus Zenbook',
            brand: 'Asus',
            price: 20000,
            quantity: 4,
        },
    ]
}

let answer = prompt('Which brand?');
console.log("There are " + inventoryByBrand[answer].length + " generations of '" + answer + "' in inventory:");
let sum = 0;
for (let i = 0; i < inventoryByBrand[answer].length; i++) {
    console.log(inventoryByBrand[answer][i].name);
    sum += inventoryByBrand[answer][i].price * inventoryByBrand[answer][i].quantity;
} console.log("With total value: " + sum * 1000 + "VND");

