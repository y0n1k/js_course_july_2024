function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
const userId = getQueryParam('id');

if (userId){
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json())
        .then(posts => {
            console.log(posts)
        })
}