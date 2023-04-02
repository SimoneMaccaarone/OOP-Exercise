class Manager extends Person {
    constructor(name, surname, employees) {
        super(name, surname);
        this.employees = employees;
    }

    toString() {
        return `NAME:${super.toString()}\nNUMBER OF EMPLOYEES:${this.numberOfEmployees()}\nNUMBER OF CLIENTS:${this.totalClients()}\nTOTAL EARNINGS:${this.sumOfAllClientsforManager()}€}`
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

    hireEmployees(employees) {
        this.employees.push(employees);
    }
    fireEmployees(employees) {
        this.employees.pop(employees);
    }
}