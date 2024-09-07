// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
const postId = getQueryParam('postId');
const userId = getQueryParam('userId')
console.log('Post id ', postId)
console.log('user id ', userId)

if (userId){
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            console.log(posts)
        })
}

if (postId){
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            console.log(comments)
        })
}
