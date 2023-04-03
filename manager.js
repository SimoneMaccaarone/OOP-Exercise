class Manager extends Person {
    constructor(name, surname, employees) {
        super(name, surname);
        this.employees = employees;
    }

    toString() {
        return `Name: ${super.toString()}\nNumber of Employees: ${this.numberOfEmployees()}\nNumber of Clients: ${this.totalClients()}\nTotal Earnings: ${this.sumOfAllClientsforManager().toFixed(2)} €}`
    }

    sumOfAllClientsforManager() {
        let sumOfAllClientsforManager = 0
        for (let i = 0; i < this.employees.length; i++) {
            const element = this.employees[i]
            sumOfAllClientsforManager += element.totalEarnings();
        }
        return sumOfAllClientsforManager;
    }

    numberOfEmployees() {
        let numberOfEmployees = 0
        for (let i = 0; i < this.employees.length; i++) {
            // const element = this.employees[i];
            numberOfEmployees++;

        }
        return numberOfEmployees;
    }

    totalClients() {
        let totalClients = 0
        for (let i = 0; i < this.employees.length; i++) {
            const element = this.employees[i];

            totalClients += element.numberOfClients();
        }
        return totalClients;
    }

    hireEmployees(newEmployees) {
        this.employees.push(newEmployees);
    }

    fireEmployees(newEmployees) {
        this.employees.pop(newEmployees);
    }
}