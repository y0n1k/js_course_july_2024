// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
console.log('ЗАВДАННЯ №1')
console.log('')

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let userArray = []

for (let i = 0; i < 10; i++) {
    let user = new User(i + 1, `Name${i + 1}`, `Surname${i + 1}`, `user${i + 1}@example.com`, `+123456789${i}`);
    userArray.push(user);
}

console.log(userArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log('')
console.log('ЗАВДАННЯ №2')
console.log('')

function evenNumbers(array) {
    return array.id % 2 === 0
}

let arraySorted = userArray.filter(evenNumbers)

console.log(arraySorted)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('')
console.log('ЗАВДАННЯ №3')
console.log('')

function sortArray(element1, element2) {
    return element1.id - element2.id
}

let arrayAscending = userArray.sort(sortArray)

console.log(arrayAscending)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
console.log('')
console.log('ЗАВДАННЯ №4')
console.log('')

class Client {
    constructor(id, name, surname, email, phone, ...product) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = product;
    }
}

let clientArray = []

function Product(name, price) {
    this.name = name;
    this.price = price;
}

for (let i = 0; i < 10; i++) {
    let products = [];
    for (let j = 0; j < i + 1; j++) {
        products.push(new Product(`Назва ${j + 1}`, (j + 1) * 10));
    }
    let clientCreated = new Client(i + 1, `Name${i + 1}`, `Surname${i + 1}`, `user${i + 1}@example.com`, `+123456789${i}`, ...products);
    clientArray.push(clientCreated);
}

console.log(clientArray)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log('')
console.log('ЗАВДАННЯ №5')
console.log('')

function sortClientArrayAscending(element1, element2) {
    return element1.order.length - element2.order.length
}

function sortClientArrayDescending(element1, element2) {
    return element2.order.length - element1.order.length
}

let clientArraySortedAsc = clientArray.sort(sortClientArrayAscending); //зростання

console.log(clientArraySortedAsc)

let clientArraySortedDes = clientArray.sort(sortClientArrayDescending); //спадання

console.log(clientArraySortedDes)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('')
console.log('ЗАВДАННЯ №6')
console.log('')

function Car(model, producer, release, max_speed, engine_volume) {
    this.model = model;
    this.producer = producer;
    this.release = release;
    this.max_speed = max_speed;
    this.engine_volume = engine_volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
    }
    this.info = function () {
        for (const element in this) {
            console.log(element, this[element]);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.max_speed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.release = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}

let car1 = new Car('Octavia', 'Skoda', 1996, 230, 2);
console.log(car1);

car1.increaseMaxSpeed(15)
car1.changeYear(2006)
car1.addDriver({name: 'David', age: 31})
car1.info()
car1.drive()

//створити клас Car
console.log('')
console.log('ЗАВДАННЯ №7')
console.log('')

class CarClass {
    constructor(model, producer, release, max_speed, engine_volume) {
        this.model = model;
        this.producer = producer;
        this.release = release;
        this.max_speed = max_speed;
        this.engine_volume = engine_volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
    }

    increaseMaxSpeed(newSpeed) {
        this.max_speed += newSpeed;
    }

    changeYear(newValue) {
        this.release = newValue;
    }

    info() {
        for (const element in this) {
            console.log(element, this[element]);
        }
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car2 = new CarClass('Lanos', 'Daewoo', 1997, 170, 1.5)
console.log(car2)

car2.addDriver({name: 'Oleg', age: '54'})
car2.drive()
car2.changeYear(2000)
car2.increaseMaxSpeed(10)
car2.info()

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log('')
console.log('ЗАВДАННЯ №8')
console.log('')

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name,age,shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize
    }
}

let cinderellaArray = [
    new Cinderella('Margo',22,38),
    new Cinderella('Julie',20,36),
    new Cinderella('Alice',25,38),
    new Cinderella('Victoria',21,38),
    new Cinderella('Ann',22,35),
    new Cinderella('Liz',24,37),
    new Cinderella('Sophia',26,39),
    new Cinderella('Katherine',21,36),
    new Cinderella('Lilith',19,35),
    new Cinderella('Suzie',23,36),
]

console.log(cinderellaArray)

let prince = new Prince('John', 24, 37)

console.log(prince)

for (const cinderella of cinderellaArray) {
    if (cinderella.footSize===prince.shoeSize){
        console.log('The Cinderella is', cinderella.name, cinderella)
    }
}