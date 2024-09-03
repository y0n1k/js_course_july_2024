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