//10
function myFunction(name, wish) {
    if (!wish) {
        alert('Missing wish');
    } else {
        alert(name + wish)
    }
}
myFunction('hieu','cha co gi');

//11.2 
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const p = document.getElementById('p');
const add = document.getElementById('add');
let project = document.getElementById('project');
let task = document.getElementById('task');
let time = document.getElementById('time');
let button = document.createElement("button");
button.innerHTML = "X";
let newAction = document.getElementById('tr').appendChild(button);
btn.addEventListener('click', (e)=>{
    console.log(e.target);
})

11.3
btn.addEventListener('click', () => {
    console.log('Upper it');
})

11.4
input.addEventListener('click', (e)=>{
    console.log(e.target);

})

// 11.5 11.6
btn.addEventListener('click', () => {
    console.log("User's name: " + input.value);
    console.log("User name uppercase: " + input.value.toUpperCase());
})

// 11.7
p.addEventListener('click', (e) => {
    console.log(e.target);
})

// 11.8
btn.addEventListener('click', () => {
    p.textContent = input.value.toUpperCase();
})

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
function getData() {
    for (let i = 0; i < timeSheetData.length; i++) {
        let newRow = tableBody.insertRow(tableBody.rows.length);
        let newCell1 = newRow.insertCell(0);
        let newCell2 = newRow.insertCell(1);
        let newCell3 = newRow.insertCell(2);
        let newCell4 = newRow.insertCell(3);
        newCell1.appendChild(document.createTextNode(timeSheetData[i].project));
        newCell2.appendChild(document.createTextNode(timeSheetData[i].task));
        newCell3.appendChild(document.createTextNode(timeSheetData[i].timeSpent));
        newCell4.appendChild(newAction);
    }
    tableBody.deleteRow(0);
}
getData();
add.addEventListener('click', () => {
    let elements = {};
    elements.project = project.value;
    elements.task = task.value;
    elements.timeSpent = time.value;
    timeSheetData.push(elements);
    console.log(timeSheetData);
    let newRow1 = tableBody.insertRow(tableBody.rows.length);
    let newCell5 = newRow1.insertCell(0);
    let newCell6 = newRow1.insertCell(1);
    let newCell7 = newRow1.insertCell(2);
    newCell5.appendChild(document.createTextNode(elements.project));
    newCell6.appendChild(document.createTextNode(elements.task));
    newCell7.appendChild(document.createTextNode(elements.timeSpent));
});








