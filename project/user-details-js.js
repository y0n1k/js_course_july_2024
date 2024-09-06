// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     // 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
const userId = getQueryParam('id');
const userDiv = document.createElement('div')
userDiv.classList.add('userInfoDiv')
document.body.appendChild(userDiv)
console.log(userId)
if (userId) {
    // Завантажуємо інформацію про конкретного користувача
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(users => {
            console.log(users)
            for (const user in users) {
                let object = users[user];
                if (typeof object === 'object') {
                    const keyDiv = document.createElement('div');
                    keyDiv.classList.add('keyDiv')
                    let caption = document.createElement('h3');
                    caption.innerText = `${user}:`;
                    keyDiv.appendChild(caption);
                    let ol = document.createElement('ol');
                    for (const item in object) {
                        const li = document.createElement('li')
                        li.innerText = `${item}: ${object[item]}`;
                        ol.appendChild(li);
                    }
                    keyDiv.appendChild(ol);
                    userDiv.appendChild(keyDiv);
                    let button = document.createElement('button');
                    button.innerText = 'Пости цього користувача';
                    button.classList.add('user-details-button');
                    button.onclick = function () {
                        window.location.href = `post-details.html?id=${users.id}`;
                    }
                    keyDiv.appendChild(button)
                } else {
                    const keyDiv = document.createElement('div');
                    keyDiv.classList.add('keyDiv')
                    let h3 = document.createElement('h3');
                    h3.innerText = `${user}: `;
                    let p = document.createElement('p')
                    p.innerText = users[user];
                    keyDiv.appendChild(h3);
                    keyDiv.appendChild(p);
                    userDiv.appendChild(keyDiv);
                    let button = document.createElement('button');
                    button.innerText = 'Пости цього користувача';
                    button.classList.add('user-details-button');
                    button.onclick = function () {
                        window.location.href = `post-details.html?id=${users.id}`;
                    }
                    keyDiv.appendChild(button)
                }

            }

        });
}
