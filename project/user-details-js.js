// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     // 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост

function getParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
const userId = getParam('userId');
const userDiv = document.createElement('div')
userDiv.classList.add('userInfoDiv')
document.body.appendChild(userDiv)
console.log(userId)
let url = new URL(`https://jsonplaceholder.typicode.com/users/${userId}`)

if (userId) {
    fetch(url)
        .then(response => response.json())
        .then(users => {
            console.log(users)
            for (const user in users) {
                const keyDiv = document.createElement('div');
                keyDiv.classList.add('keyDiv')
                let object = users[user];
                let caption = document.createElement('h3');
                caption.innerText = `${user}:`;
                keyDiv.appendChild(caption);
                if (typeof object === 'object') {
                    let ol = document.createElement('ol');
                    for (const item in object) {
                        let addressArray = object[item];
                        if (typeof addressArray === 'object'){
                            let liOuter = document.createElement('li')
                            liOuter.innerText = `${item}: `;
                            const ulNew = document.createElement('ul')
                            for (element in addressArray) {
                                ol.appendChild(ulNew);
                                const li = document.createElement('li')
                                li.innerText = `${element}: ${addressArray[element]}`;
                                ulNew.appendChild(li);
                                liOuter.appendChild(ulNew);
                            }
                            ol.appendChild(liOuter)
                        } else {
                        // if (typeof item === 'object') {
                        //     for (element in item) {
                        //         const li = document.createElement('li')
                        //         li.innerText = `${item}: ${object[item]}`;
                        //         ol.appendChild(li);
                        //     }
                        // }
                        const li = document.createElement('li')
                        li.innerText = `${item}: ${object[item]}`;
                        ol.appendChild(li);
                        }
                    }
                    keyDiv.appendChild(ol);
                } else {
                    let p = document.createElement('p')
                    p.innerText = users[user];
                    keyDiv.appendChild(p);
                }
                userDiv.appendChild(keyDiv);
            }
            let postsDiv = document.createElement('div');
            postsDiv.classList.add('postsDiv');
            let button = document.createElement('button');
            button.innerText = 'Пости цього користувача';
            button.classList.add('user-details-button');
            button.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                    .then(result => result.json())
                    .then(commentsArray => {
                        for (const comments of commentsArray) {
                            let postLink = document.createElement('a');
                            postLink.classList.add('postLink');
                            postLink.href = `post-details.html?userId=${userId}&postId=${comments.id}`;
                            postLink.innerText = comments.title;
                            postsDiv.appendChild(postLink)
                        }
                    })
            }
            document.body.appendChild(postsDiv);
            postsDiv.appendChild(button);
        });
}