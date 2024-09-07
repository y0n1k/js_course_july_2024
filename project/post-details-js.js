// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.

function getParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const userId = parseInt(getParam('userId'));
const postId = parseInt(getParam('postId'));

console.log('Post id ', postId)
console.log('user id ', userId)

if (userId && postId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(posts => {
                console.log(posts)
                const postInfo = document.createElement('div')
                postInfo.classList.add('postInfo')
                for (const post of posts) {
                    if (post.id === postId) {
                        // console.log(post)
                        for (item in post) {
                            const postInfoDiv = document.createElement('div')
                            postInfoDiv.classList.add('postInfoDiv')
                            const caption = document.createElement('h3')
                            caption.innerText = `${item}: `;
                            postInfoDiv.appendChild(caption)
                            const text = document.createElement('p')
                            text.innerText = post[item];
                            postInfoDiv.appendChild(text)
                            postInfo.appendChild(postInfoDiv)
                        }
                    }
                }
                document.body.appendChild(postInfo)
            })
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                console.log(comments);
                for (let i = 0; i < comments.length; i += 4) {
                    const commentsDiv = document.createElement('div');
                    document.body.appendChild(commentsDiv);
                    commentsDiv.classList.add('commentsDiv');
                    for (let j = 0; j < 4; j++) {
                        if (i + j >= comments.length) break;
                        let commentsArray = comments[i + j];
                        const commentDiv = document.createElement('div');
                        commentDiv.classList.add('commentDiv')
                        commentsDiv.appendChild(commentDiv);
                        for (const element in commentsArray) {
                            const commentField = document.createElement('div');
                            commentField.classList.add('commentField');
                            commentDiv.appendChild(commentField);
                            const key = document.createElement('p')
                            key.innerText = `${element}: ${commentsArray[element]}`;
                            commentField.appendChild(key);
                            commentDiv.onmouseover = function () {
                                commentDiv.style.scale = '105%';
                            }
                            commentDiv.onmouseleave = function () {
                                commentDiv.style.scale = '100%';
                            }
                        }
                    }
                }
            })
}