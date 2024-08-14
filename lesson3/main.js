// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello World!</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello World! ${i}</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let x = 0
while (x < 20) {
    document.write(`<h1>Заголовок</h1>`)
    x++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
x = 0
while (x < 20) {
    document.write(`<h1>Заголовок ${x}</h1>`)
    x++
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>')

for (let i = 0; i < listOfItems.length; i++) {
    const element = listOfItems[i];
    document.write(`<li>${element}</li>`)
}
document.write('</ul>')

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.yogi-life.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FnZ9c4snS4ytPRImATDfl&w=640&q=75'
    },
];

// <div className="product-card">
//     <h3 className="product-title">TITLE. Price - PRICE</h3>
//     <img src="IMAGE" alt="" className="product-image"/>
// </div>
document.write(`<div class="product-card">`)
for (const product of products) {
    document.write(`<h3 class="product-title">${product.title}. Price - ${product.price}</h3>
    <img src="${product.image}" alt="" class="product-image">`)
}
document.write(`</div>`)



let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
document.write(`<h2>Користувачі, які старші за 30 років</h2>`)
for (const key of users) {
    if (key.age > 30) {
        document.write(`<p>${key.name} ${key.age} ${key.status}</p>`)
    }
}
document.write(`<h2>Користувачі зі статусом True</h2>`)
for (const key of users) {
    if (key.status) {
        document.write(`<p>${key.name} ${key.age} ${key.status}</p>`)
    }
}
document.write(`<h2>Користувачі зі статусом False</h2>`)
for (const key of users) {
    if (!key.status) {
        document.write(`<p>${key.name} ${key.age} ${key.status}</p>`)
    }
}