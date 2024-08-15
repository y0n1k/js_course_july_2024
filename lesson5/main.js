// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectangleArea = (a, b) => {
    console.log(a*b);
}
rectangleArea(4, 5)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const circleArea = r => console.log(Math.PI*r*r);
circleArea(4);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cylinderArea = (h, r) => console.log(2 * Math.PI * r * (h + r));
cylinderArea(2, 3);

// - створити функцію яка приймає масив та виводить кожен його елемент

let myArray = [12, 'hello', true];

const arrayShow = array => console.log(array);
arrayShow(myArray);

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

const  showText = string => document.write(`<p>${string}</p>`);

let myText = 'Hello World!';
showText(myText);

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

const showList1 = element => {
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

const showList2 = (text, amount) => {
    document.write(`<ul>`);
    for (let i = 0; i < amount; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
showList2(`Hola`, 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

let arr = [123, true, 'Word', false, 0]

const arrayList = arr => {
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

const showObj = item => {
    for (const key of item) {
        document.write(`<div>${key.id} ${key.name} ${key.age}</div>`)
    }
}
showObj(obj);

// - створити функцію яка повертає найменьше число з масиву

let arrayOfNumbers = [34, 12, 763, -645, 12.4, 0];
console.log(Math.min(...arrayOfNumbers)); //вбудована функція

const findMin = arr => { //власна функція
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
    return min;
}

findMin(arrayOfNumbers);

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arrayToSum = [1, 2, 3, 10, -6, 12];

const sum = arr => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log(total);
    return total;
}
sum(arrayToSum);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах

const swap = (arr, index1, index2) => {
    let t = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = t;
    console.log(arr);
    return arr;
}

let arrayToSwap = [12, 57, true, 'Hello'];
console.log(arrayToSwap)
swap(arrayToSwap, 0, 3);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

let currencies = [
    {currency:'USD',value:41.25},
    {currency:'GBP',value:52.91},
    {currency:'PLN',value:10.59},
    {currency:'EUR',value:45.43}];
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
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