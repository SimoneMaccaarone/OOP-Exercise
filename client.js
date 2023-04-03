class Client extends Person {
    constructor(name, surname, orders, address) {
        super(name, surname);
        this.orders = orders;
        this.address = address;
    }

    toString() {
        return `Client: ${super.toString()}\nOrder(s):\n${this.ordersToString()}\nTotal Payment: ${this.totalOrdersPrice().toFixed(2)} €\n-------------------\n\nAddress: ${this.address}`
    }

    ordersToString() {
        let str = '';
        for (let i = 0; i < this.orders.length; i++) {
            str += '\n-------------------\n' + this.orders[i].toString();
        }
        return str;
    }

    totalOrdersPrice() {
        let totalOrdersPrice = 0;
        for (let i = 0; i < this.orders.length; i++) {
            totalOrdersPrice += this.orders[i].totalPrice();
        }
        return totalOrdersPrice;
    }

    addOrder(newOrder) {
        this.orders.push(newOrder);
    }

    removeOrder(newOrder) {
        this.orders.pop(newOrder)
    }
}

