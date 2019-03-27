class Company{
    constructor(){
        this.employees = [];
    }
    addEmployee(employee){
        this.employees.push(employee);
    }
    getAllSalesPeople(){
        this.employees.map((employee) => {
            if (employee instanceof Sales)
                console.log(employee.toString())
        });
    }
    toString(){
        this.employees.map((employee) => {
            console.log(employee.toString());
        });
    }
}

class Employee{
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    growUp(){
        this.age++;
    }
    updateSalary(newSalary){
        this.salary = newSalary;
    }
    toString(){
        return this.name + " " + this.age + " " + this.salary;
    }
}

class IT extends Employee{
    constructor(name, age, salary, specialty){
        super(name, age, salary);
        this.specialty = specialty;
    }
    toString(){
        var string = super.toString();
        return string + " " + this.specialty;
    }
}

    class Sales extends Employee{
        constructor(name, age, salary, commission){
            super(name, age, salary);
            this.commission = commission;
            this.updateSalary(salary + commission);
        }
        toString(){
            return super.toString();
        }
    }

i1 = new IT("Jean", 21, 2000, "Java");
i2 = new IT("Tala", 22, 2000, "C++");
s1 = new Sales("Patrick", 25, 3000, 500);
c0 = new Company();

c0.addEmployee(i1);
c0.addEmployee(i2);
c0.addEmployee(s1);
console.log("Sales:")
c0.getAllSalesPeople();
console.log("Everyone:")
c0.toString();