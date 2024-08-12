// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++){
    document.write(`<div>Hello World!</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++){
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

for (let i=0; i < listOfItems.length; i++){
    const element = listOfItems[i];
    document.write(`<li>${element}</li>`)
}
document.write('</ul>')