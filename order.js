class Order {
    constructor(prodoct, quantity, uprice) {
        this.prodoct = prodoct;
        this.quantity = quantity;
        this.uprice = uprice;
    }

    toString() {
        return `PRODUCT: ${this.prodoct}\nQUANTITY:${this.quantity}\nUNITY PRICE:${this.uprice}€\nTOTAL PRICE:${this.totalPrice()}€`
    }

    totalPrice() {
        return this.quantity * this.uprice
    }
}