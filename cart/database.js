import Product from "./product.js";

export default class DataBase {

    #products

    constructor() {
        this.#products = [
            new Product({
                id: 0,
                name: 'Milk',
                price: 60,
                count: 100,
            }),
            new Product({
                id: 1,
                name: 'Bread',
                price: 20,
                count: 300,
            }),
            new Product({
                id: 2,
                name: 'Egg x 10',
                price: 120,
                count: 80,
            }),
        ]
    }

    getProducts() {
        return this.#products
    }

    getProductInfoById(id) {
        const product = this.#products.find((product) => product.id === id)
        return { ...product }
    }

    removeProduct(id, count) {
        const product = this.#products.find((product) => product.id === id)
        product.count -= count
    }
}
