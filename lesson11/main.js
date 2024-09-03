// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
const cartsDiv = document.getElementById('carts')
fetch ('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        console.log(carts);
        for (const cart of carts) {
            const div = document.createElement('div')
            div.innerText = `
            id: ${cart.id},
            total: ${cart.total}
            discountedTotal: ${cart.total}
            userId: ${cart.userId}
            totalProducts: ${cart.totalProducts}
            totalQuantity: ${cart.totalQuantity}`
            const ol = document.createElement('ol');
            for (const product of cart.products) {
                const li = document.createElement('li');
                li.innerText = `
                id: ${product.id},
                 title: ${product.title},
                 price: ${product.price},
                 quantity: ${product.quantity},
                 total: ${product.total},
                 discountPercentage: ${product.discountPercentage},
                 discountedTotal: ${product.discountedTotal}`
                ol.appendChild(li);
                const img = document.createElement('img')
                img.src = product.thumbnail;
                ol.appendChild(img)
            }
            div.appendChild(ol)
            cartsDiv.appendChild(div)
        }
    })

// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
let olFunc = function(){
    return document.createElement('ol');
}

const recipesDiv = document.getElementById('recipes')
fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        console.log(recipes);
        for (const recipe of recipes) {
            const div = document.createElement('div')
            for (const recipeKey in recipe){
                if (Array.isArray(recipe[recipeKey])){
                    let p = document.createElement('p')
                    p.innerText = recipeKey;
                    recipesDiv.appendChild(p)
                    let ol = document.createElement('ol');
                    let array = recipe[recipeKey];
                    for (const item of array) {
                        const li = document.createElement('li')
                        li.innerText = item;
                        ol.appendChild(li);
                    }
                    recipesDiv.appendChild(ol)
                } else {
                    const keyDiv = document.createElement('div');
                    keyDiv.innerText = `${recipeKey}: ${recipe[recipeKey]}`;
                    recipesDiv.appendChild(keyDiv);
                }
            }
            const img = document.createElement('img')
            img.style.width = '400px'
            img.style.objectFit = 'cover'
            img.src = recipe.image;
            recipesDiv.appendChild(img)
            recipesDiv.appendChild(div)
        }
    });