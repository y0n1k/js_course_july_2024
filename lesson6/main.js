// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('ЗАВДАННЯ №1')
console.log('')

let a = 'hello world'
let b = 'lorem ipsum'
let c = 'javascript is cool'

console.log(a);
console.log(b);
console.log(c);

console.log(a.length);
console.log(b.length);
console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
console.log('ЗАВДАННЯ №2')
console.log('')

a = a.toUpperCase();
b = b.toUpperCase();
c = c.toUpperCase();

console.log(a);
console.log(b);
console.log(c);

// - Перевести до нижнього регістру настипні стрінгові значення
console.log('ЗАВДАННЯ №3')
console.log('')

console.log(a.toLowerCase());
console.log(b.toLowerCase());
console.log(c.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log('ЗАВДАННЯ №4')
console.log('')

let str1 = ' dirty string   ';
console.log(str1)

str1 = str1.trim()
console.log(str1)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
console.log('ЗАВДАННЯ №5')
console.log('')

function stringToArray(str) {
    return str.split(' ')
}

let str2 = 'Ревуть воли як ясла повні';
console.log(stringToArray(str2));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log('ЗАВДАННЯ №6')
console.log('')

let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
console.log(arr);
let map = arr.map(element => element.toString());
console.log(map);

// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
console.log('ЗАВДАННЯ №7')
console.log('')

let nums = [11, 21, 3];
console.log(nums)

function sortNums(array, direction) {
    if (direction === 'ascending') {
        array.sort((element1, element2) => {
            return element1 - element2;
        })
        return array;
    } else {
        array.sort((element1, element2) => {
            return element2 - element1;
        })
        return array;
    }
}

console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log('ЗАВДАННЯ №8')
console.log('')

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortedArray = coursesAndDurationArray.sort((element1, element2) => {
    return element2.monthDuration - element1.monthDuration;
});
console.log(sortedArray)

let filteredArray = coursesAndDurationArray.filter(element => element.monthDuration > 5);
console.log(filteredArray);

let mappedArray = coursesAndDurationArray.map((element, index) => {
    return {
        id: index + 1,
        title: element.title,
        monthDuration: element.monthDuration
    };
});
console.log(mappedArray)

// описати колоду карт (від 6 до туза без джокерів)
console.log('ЗАВДАННЯ №9')
console.log('')

const cards = []
const suits = ['spade', 'clubs', 'heart', 'diamond']
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']

for (const suit of suits) {
    for (const value of values){
            if (suit==='spade'|| suit==='clubs'){
                cards.push({cardSuit: suit, value: value, color: 'black'})
            } else {
                cards.push({cardSuit: suit, value: value, color: 'red'})
            }
        }
}
console.log(cards)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

let find1 = cards.filter(element => element.cardSuit === 'spade' && element.value==='ace' && element.color==='black')
console.log(find1);

let find2 = cards.filter(element =>  element.value==='6')
console.log(find2);

let find3 = cards.filter(element => element.color==='red')
console.log(find3);

let find4 = cards.filter(element => element.cardSuit==='diamond')
console.log(find4);

let find5 = cards.filter(element => element.cardSuit==='clubs' && (element.value!=='6' || element.value!=='7' || element.value!=='8'))
console.log(find5);

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
console.log('ЗАВДАННЯ №10')
console.log('')

let suitsSorted = cards.reduce((accumulator, card)=>{
        if (card.cardSuit==='spade'){
            accumulator.spades.push(card);
        } else if (card.cardSuit==='clubs'){
            accumulator.clubs.push(card);
        } else if (card.cardSuit==='heart'){
            accumulator.heart.push(card);
        } else {
            accumulator.diamond.push(card);
        }
  return accumulator;
},{spades:[],clubs:[], heart:[], diamond:[]});

console.log(suitsSorted)

// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
console.log('ЗАВДАННЯ №11')
console.log('')
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let find6 = coursesArray.filter(element => element.modules.includes('sass'));
console.log(find6);

let find7 = coursesArray.filter(element => element.modules.includes('docker'));
console.log(find7);