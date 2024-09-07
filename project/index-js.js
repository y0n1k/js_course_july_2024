// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(userObject => {
        console.log(userObject)
        for (let i = 0; i < userObject.length; i += 2) {

            let surroundDiv = document.createElement('div')
            surroundDiv.classList.add('surroundDiv')
            for (let j = 0; j < 2; j++) {
                if (i + j >= userObject.length) break;
                let user = userObject[i + j];
                let userDiv = document.createElement('div')
                userDiv.classList.add('userDiv')
                let textDiv = document.createElement('div')
                textDiv.classList.add('textDiv')
                let h21 = document.createElement('h2')
                h21.innerText = user.id;
                textDiv.appendChild(h21)
                surroundDiv.appendChild(userDiv)
                let h22 = document.createElement('h2')
                h22.innerText = user.name;
                textDiv.appendChild(h22)
                userDiv.appendChild(textDiv)
                console.log(user.id, user.name)
                let button = document.createElement('button')
                button.classList.add('user-details-button')
                button.innerText = 'Деталі про користувача'
                // button.href = 'user-details.html'
                button.onclick = function () {
                    window.location.href = `user-details.html?userId=${user.id}`;
                }
                userDiv.appendChild(button)
                userDiv.onmouseover = function () {
                    userDiv.style.scale = '105%';
                }
                userDiv.onmouseleave = function () {
                    userDiv.style.scale = '100%';
                }
                surroundDiv.appendChild(userDiv)
            }
            document.body.appendChild(surroundDiv)
        }
    })