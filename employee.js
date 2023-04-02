class Employee extends Person {
    constructor(name, surname, clients,) {
        super(name, surname);
        this.clients = clients;

    }
    toString() {
        return `NAME:${super.toString()}\nNUMBER OF CLIENTS:${this.clients.length}\nTOTAL EARNINGS:${'----------'}€\nBEST CLIENT:${this.bestClient().name} ${this.bestClient().surname}`
    }


    bestClient() {
        const clients = this.clients;
        let bestClient = clients[0];

        for (let i = 0; i < clients.length; i++) {
            const actualClient = clients[i];

            const bestTotalOrderPrice = bestClient.totalOrdersPrice();
            const actualOrderPrice = actualClient.totalOrdersPrice();

            if (actualOrderPrice > bestTotalOrderPrice) {
                bestClient = actualClient
            }
        }
        return bestClient;
    }
}

    // totalEarning(){}

    // addClient(){}

    // removeClient(){}