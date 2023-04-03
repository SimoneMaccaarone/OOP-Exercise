class Order {
    constructor(prodoct, quantity, uprice) {
        this.prodoct = prodoct;
        this.quantity = quantity;
        this.uprice = uprice;
    }

    toString() {
        return `Product: ${this.prodoct}\nQuantity: ${this.quantity}\nUnity Price: ${this.uprice.toFixed(2)} €\nTotal Price: ${this.totalPrice().toFixed(2)} €`
    }

    totalPrice() {
        return this.quantity * this.uprice
    }
}