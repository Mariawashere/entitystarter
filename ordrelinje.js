class Ordrelinje {
    productId;
    quantity;
    price;

    constructor({ productId, quantity, price }) {
        this.productId = productId;
        this.quantity = quantity;
        this.price = price;
    }
}

export default Ordrelinje;