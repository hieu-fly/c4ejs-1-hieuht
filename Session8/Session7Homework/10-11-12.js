// //10
// function myFunction(name, wish) {
//     if (!wish) {
//         alert('Missing wish');
//     } else {
//         alert(name + wish)
//     }
// }
// myFunction('hieu', 'cha co gi');

// //11.2 
// const btn = document.getElementById('btn');
const input = document.getElementById('input');
const p = document.getElementById('p');
const add = document.getElementById('add');
let project = document.getElementById('project');
let task = document.getElementById('task');
let time = document.getElementById('time');
let updateButton = document.getElementById('updateButton');
// btn.addEventListener('click', (e) => {
//     console.log(e.target);
// })

// 11.3
// btn.addEventListener('click', () => {
//     console.log('Upper it');
// })

// 11.4
// input.addEventListener('click', (e) => {
//     console.log(e.target);

// })

// // 11.5 11.6
// btn.addEventListener('click', () => {
//     console.log("User's name: " + input.value);
//     console.log("User name uppercase: " + input.value.toUpperCase());
// })

// // 11.7
// p.addEventListener('click', (e) => {
//     console.log(e.target);
// })

// // 11.8
// btn.addEventListener('click', () => {
//     p.textContent = input.value.toUpperCase();
// })

// 12
const timeSheetData = [
    {
        project: 'Learn fornt-end',
        task: 'Learn HTML',
        timeSpent: 6
    },
    {
        project: 'Learn fornt-end',
        task: 'Learn CSS',
        timeSpent: 8
    },
    {
        project: 'Learn fornt-end',
        task: 'Learn JS Variables and Data Types',
        timeSpent: 6
    },
    {
        project: 'Learn git',
        task: 'Learn git basics',
        timeSpent: 2
    }]
console.log(timeSheetData);

let tableBody = document.getElementById('myTable').getElementsByTagName('tbody')[0];
console.log(tableBody);

for (var i = 0; i < timeSheetData.length; i++) {
    let newRow = tableBody.insertRow(i);
    newRow.id = `${i}`
    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let newCell3 = newRow.insertCell(2);
    let newCell4 = newRow.insertCell(3);
    newCell4.id = `remove_${i}`;
    newCell1.innerHTML = timeSheetData[i].project;
    newCell2.innerHTML = timeSheetData[i].task;
    newCell3.innerHTML = timeSheetData[i].timeSpent;
    let td = document.getElementById(newCell4.id);
    let remove = document.createElement('button');
    remove.innerHTML = 'X';
    let update = document.createElement('button');
    update.innerHTML = 'U';
    td.appendChild(remove);
    td.appendChild(update);
    remove.onclick = function () {
        var row = document.getElementById(newRow.id);
        row.parentNode.removeChild(row);
    }
    update.onclick = function () {
        project.value = timeSheetData[newRow.id].project;
        task.value = timeSheetData[newRow.id].task;
        time.value = timeSheetData[newRow.id].timeSpent;
    }

}
add.addEventListener('click', () => {
    i++;
    let elements = {};
    elements.project = project.value;
    elements.task = task.value;
    elements.timeSpent = time.value;
    timeSheetData.push(elements);
    console.log(timeSheetData);

    let newRow1 = tableBody.insertRow(tableBody.rows.length);
    newRow1.id = `${i}`;
    let newCell5 = newRow1.insertCell(0);
    let newCell6 = newRow1.insertCell(1);
    let newCell7 = newRow1.insertCell(2);
    let newCell8 = newRow1.insertCell(3);
    newCell8.id = `remove_${i}`;
    newCell5.innerHTML = elements.project;
    newCell6.innerHTMl = elements.task;
    newCell7.innerHTML = elements.timeSpent;
    let td = document.getElementById(newCell8.id);
    let remove = document.createElement('button');
    let update = document.createElement('button');
    remove.innerHTML = 'X';
    update.innerHTML = 'U';
    td.appendChild(remove);
    td.appendChild(update);
    remove.onclick = function () {
        var row = document.getElementById(newRow1.id);
        row.parentNode.removeChild(row);
    }
});
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    project.value = '';
    task.value = '';
    time.value = '';
})












