class Employee extends Person {
    constructor(name, surname, clients,) {
        super(name, surname);
        this.clients = clients;
    }

    toString() {
        return `Name: ${super.toString()}\nNumber of clients: ${this.clients.length}\nTotal earnings: ${this.totalEarnings().toFixed(2)} €\nBest client: ${this.bestClient().name} ${this.bestClient().surname}`
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

    totalEarnings() {
        let totalEarnings = 0
        for (let i = 0; i < this.clients.length; i++) {
            const element = this.clients[i]
            totalEarnings += element.totalOrdersPrice();
        }
        return totalEarnings;
    }

    addClient(newClients) {
        this.clients.push(newClients);
    }

    removeClient(newClients) {
        this.clients.pop(newClients);
    }

    numberOfClients() {
        let numberOfClients = 0
        for (let i = 0; i < this.clients.length; i++) {
            numberOfClients++;
        }
        return numberOfClients;
    }

}