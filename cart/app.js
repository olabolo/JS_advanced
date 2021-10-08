import Cart from './cart.js'
import DataBase from './database.js'

const db = new DataBase()

const productElement = document.getElementById('products')
const cartElement = document.getElementById('cart')
const priceElement = document.getElementById('price')

const cart = new Cart(db, renderCart)


renderCart([], 0)
renderProducts(db.getProducts())

function renderProducts(productList) {
    productElement.innerHTML = ''
    productList.forEach((product) => {
        const listItem = document.createElement('li')
        listItem.innerHTML = `<li>${product.name} - Price ${product.price} - Count ${product.count}</li>`
        listItem.addEventListener('click', () => {
            cart.addCartItem(product.id, product.price, 1)
            db.removeProduct(product.id, 1)
            renderProducts(db.getProducts())
        })
        productElement.appendChild(listItem)
    })
}

function renderCart(cartList, totalPrice) {
    cartElement.innerHTML = ''
    cartList.forEach((cartItem) => {
        const productInfo = db.getProductInfoById(cartItem.id)
        const listItem = document.createElement('li')
        listItem.innerHTML = `<li>${productInfo.name} - Price ${productInfo.price} - Count ${cartItem.count}</li>`
        cartElement.appendChild(listItem)
    })
    priceElement.innerText = totalPrice
}
