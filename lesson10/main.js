// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let disappearButton = document.getElementById('btn');
disappearButton.onclick = function () {
    let text = document.getElementById('text')
    text.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let submitButton1 = document.getElementById('sbmtbtn1')
let form1 = document.forms.form1;
let result = document.getElementById('result')
submitButton1.onclick = function (sbmt) {
    let age = form1.age1.value
    sbmt.preventDefault();
    if (0 <= age && age <= 18) {
        result.innerText = 'Користувач неповнолітній';
    } else if (age >= 18) {
        result.innerText = 'Користувач повнолітній';
    } else if (age < 0) {
        result.innerText = 'Користувач не народився ще';
    }
}

// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form2 = document.forms.form2;
let showObject = document.getElementById('sbmtbtn2')
showObject.onclick = function (abc) {
    abc.preventDefault();
    let name = form2.name.value;
    let surname = form2.surname.value;
    let age = form2.age.value
    let obj = {name, surname, age};
    // document.getElementById('show').innerText = JSON.stringify(obj);
    document.getElementById('show').innerText = `Мене звати ${name} ${surname}, мені ${age} років`;
}

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let currentNumber = +localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);
document.getElementById('number').innerText = currentNumber

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let sessionList = JSON.parse(localStorage.getItem('sessionList')) || [];
sessionList.push(new Date());
localStorage.setItem('sessionList', JSON.stringify(sessionList));

// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let form3 = document.forms.form3;
let lbsConvert = form3.lbs;
let kgConvert = form3.kg;
lbsConvert.oninput = function (abc){
    abc.preventDefault();
    let lbs = form3.lbs.value;
    kgConvert.value = lbs*0.45359237;
}
kgConvert.oninput = function (abc){
    abc.preventDefault();
    let kg = form3.kg.value;
    lbsConvert.value = kg*2.20462262;
}

// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let form4 = document.forms.form4;
let generateButton = form4.generate;
generateButton.onclick = function (abc){
    abc.preventDefault();
    let row =  form4.row.value;
    let column = form4.column.value;
    let content = form4.content.value;
    let table = document.createElement('table');
    for (let i = 0; i < row; i++) {
        let rowCreate = document.createElement('tr');
        for (let i = 0; i < column; i++){
            let columnCreate = document.createElement('th');
            columnCreate.innerText = content;
            rowCreate.appendChild(columnCreate);
        }
        table.appendChild(rowCreate);
    }
    document.body.appendChild(table);
}