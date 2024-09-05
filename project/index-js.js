// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
let body = document.getElementsByTagName('body')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(userObject => {
        console.log(userObject)
        for (const user of userObject) {
            let userDiv = document.createElement('div')
            userDiv.classList.add('userDiv')
            let p1 = document.createElement('p')
            p1.innerText = user.id;
            userDiv.appendChild(p1)
            let p2 = document.createElement('p')
            p2.innerText = user.name;
            userDiv.appendChild(p2)
            console.log(user.id, user.name)
            document.appendChild(userDiv)
        }
    })