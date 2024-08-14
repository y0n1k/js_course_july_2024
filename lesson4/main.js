// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleArea(a, b) {
    return a * b;
}

let rectangle = rectangleArea(4, 5);
console.log(rectangle);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(r) {
    return Math.PI * r * r;
}

let circle = circleArea(4);
console.log(circle);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(h, r) {
    return 2 * Math.PI * r * (h + r);
}

let cylinder = cylinderArea(2, 3);
console.log(cylinder);

// - створити функцію яка приймає масив та виводить кожен його елемент

let myArray = [12, 'hello', true];

function arrayShow(array) {
    console.log(array);
}

arrayShow(myArray);

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function showText(string) {
    document.write(`<p>${string}</p>`);
}

let myText = 'Hello World!';
showText(myText);

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function showList1(element) {
    document.write(`<ul>
        <li>${element}</li>
        <li>${element}</li>
        <li>${element}</li>
        </ul>`);
}

let myList = 123;
showList1(myList);
showList1('May the Force be with you');

// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function showList2 (text, amount){
    document.write(`<ul>`);
    for (let i = 0; i < amount; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
showList2(`Hola`, 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

let arr = [123, true, 'Word', false, 0]

function arrayList (arr){
    document.write(`<ul>`);
    for (let i = 0; i <arr.length; i++){
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}
arrayList(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let obj = [
    {id: 1, name: 'John', age: 24},
    {id: 2, name: 'Tom', age: 24},
    {id: 3, name: 'Bob', age: 24},
    {id: 4, name: 'Louis-Dieudonné', age: 77}
]

function showObj (item){
    for (const key of item) {
        document.write(`<div>${key.id} ${key.name} ${key.age}</div>`)
    }
}
let myObj = showObj(obj);
console.log(myObj);


// - створити функцію яка повертає найменьше число з масиву

let arrayOfNumbers = [34, 12, 763, -645, 12.4, 0];
console.log(Math.min(...arrayOfNumbers));

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
let minValue = findMin(arrayOfNumbers);
console.log(minValue);

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arrayToSum = [1, 2, 3, 10, -6, 12];

function sum(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

let summedArray = sum(arrayToSum);
console.log(summedArray);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах

function swap(arr, index1, index2){
    let t = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = t;
    return arr;
}

let arrayToSwap = [12, 57, true, 'Hello'];
console.log(arrayToSwap)
let swappedArray= swap(arrayToSwap, 0, 3);
console.log(swappedArray);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

let currencies = [
    {currency:'USD',value:41.25},
    {currency:'GBP',value:52.91},
    {currency:'PLN',value:10.59},
    {currency:'EUR',value:45.43}];
function exchange(sumUAH, currencyValues, exchangeCurrency){
    for (const element of currencyValues) {
        if (element.currency === exchangeCurrency){
            return sumUAH/element.value;
        }
    }
}

console.log(exchange(10000 ,currencies,'EUR'));
console.log(exchange(10000 ,currencies,'USD'));
console.log(exchange(10000 ,currencies,'GBP'));
console.log(exchange(10000 ,currencies,'PLN'));