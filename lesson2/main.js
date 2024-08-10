//1 завдання

let array = ['word1', true, 12, 'word2', 'word3', false, false, 65, 'word4', 0];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

//2 завдання
let book1 = {
    title: 'The Walking Dead',
    pageCount: 304,
    genre: 'post-apocalyptic',
}
let book2 = {
    title: 'Fahrenheit 45',
    pageCount: 208,
    genre: 'anti-utopia',
}
let book3 = {
    title: 'Watchmen',
    pageCount: 448,
    genre: 'superhero',
}
console.log(book1)
console.log(book2)
console.log(book3)

//3 завдання
let book4 = {
    title: 'The Walking Dead',
    pageCount: 304,
    genre: 'post-apocalyptic',
    authors: [
        {name:'Robert Kirkman', age: 45},
        {name: 'Tony Moore', age: 45}
    ]
}
let book5 = {
    title: 'Fahrenheit 45',
    pageCount: 208,
    genre: 'anti-utopia',
    authors: [
        {name:'Ray Bradbury', age: 91}
    ]
}
let book6 = {
    title: 'Watchmen',
    pageCount: 448,
    genre: 'superhero',
    authors: [
        {name:'Alan Moore', age: 70},
        {name: 'David Gibbons', age: 75},
        {name: 'John Higgins', age: 49}
    ]
}
console.log(book4)
console.log(book5)
console.log(book6)

//4 завдання
let user = [
    {name: 'John', username: 'j0hny4', password: 'qwerty123'},
    {name: 'John', username: 'j0hny4', password: 'fdjghdfigu323'},
    {name: 'John', username: 'j0hny4', password: '349fj9f3'},
    {name: 'John', username: 'j0hny4', password: 'ert_9g4j'},
    {name: 'John', username: 'j0hny4', password: 'gf!oi4@ig'},
    {name: 'John', username: 'j0hny4', password: 'rf4^$13f5'},
    {name: 'John', username: 'j0hny4', password: 'gng3v03'},
    {name: 'John', username: 'j0hny4', password: '4fj.40g'},
    {name: 'John', username: 'j0hny4', password: 'fgbe3c'},
    {name: 'John', username: 'j0hny4', password: 'eg"?{E:'}
]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);

//5 завдання
let temperature =  {
    monday: {
        morning: 19,
        afternoon: 25,
        evening: 23
    },
    tuesday: {
        morning: 19,
        afternoon: 25,
        evening: 23
    },
    wednesday: {
        morning: 19,
        afternoon: 25,
        evening: 23
    },
    thursday: {
        morning: 19,
        afternoon: 25,
        evening: 23
    },
    friday: {
        morning: 19,
        afternoon: 25,
        evening: 23
    },
    saturday: {
        morning: 19,
        afternoon: 25,
        evening: 23
    },
    sunday: {
        morning: 19,
        afternoon: 25,
        evening: 23
    }
}

console.log(temperature)

//6 завдання
let x = 12;
if (x !== 0) {
    console.log('true');
}
else {
    console.log('false');
}
let a = 1;
if (a !== 0) {
    console.log('true');
}
else {
    console.log('false');
}
let b = 0;
if (b !== 0) {
    console.log('true');
}
else {
    console.log('false');
}
let c = -3;
if (c !== 0) {
    console.log('true');
}
else {
    console.log('false');
}

//7 завдання
let time = 16;
if (time <= 15 && time >= 0) {
    console.log('1 quarter');
}
else if (time > 15 && time <= 30){
    console.log('2 quarter');
}
else if (time > 30 && time <=45){
    console.log('3 quarter');
}
else if (time > 45 && time <= 59){
    console.log('4 quarter');
}
else {
    console.log('This number is beyond time');
}

//8 завдання
let day = 24;
if (day <= 10) {
    console.log('1 decade');
} else if (day > 10 && day <= 20) {
    console.log('2 decade');
} else if (day > 20 && day <= 31) {
    console.log('3 decade');
} else {
    console.log('Wrong date');
}

//9 завдання
let dayOfWeek = prompt('Enter number of the day');
switch (dayOfWeek){
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('???');
        break;
}

//10 завдання
let number1 = +prompt('Enter number one');
let number2 = +prompt('Enter number two');

if (number1 > number2){
    console.log(`${number1} is bigger than ${number2}`);
}
else if (number1 < number2){
    console.log(`${number2} is bigger than ${number1}`);
}
else {
    console.log(`${number1} is equal to ${number2}`)
}


//11 завдання варіант 1
let y = null;
if (y === 0 || y === null || y === false || y === undefined || y === NaN || y === ''){
    y = 'default';
    console.log(y);
} else{
    console.log(y);
}
//11 завдання варіант 2
let z = false;
if (!z){
    z = 'default';
    console.log(z);
} else{
    console.log(z);
}

//12 завдання
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration >= 5){
    console.log('Super')
}
if(coursesAndDurationArray[1].monthDuration >= 5){
    console.log('Super')
}
if(coursesAndDurationArray[2].monthDuration >= 5){
    console.log('Super')
}
if(coursesAndDurationArray[3].monthDuration >= 5){
    console.log('Super')
}
if(coursesAndDurationArray[4].monthDuration >= 5){
    console.log('Super')
}
if(coursesAndDurationArray[5].monthDuration >= 5){
    console.log('Super')
}