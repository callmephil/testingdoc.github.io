class Company{
    constructor(){
        this.employees = [];
    }
    hire(employee){
        this.employees.push(employee);
    }
    getAllSalesEmployees(){
        this.employees.map((employee) => {
            if (employee instanceof Sales)
                console.log(employee.toString())
        });
    }
    getAllITEmployees(){
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
    incrementAge(){
        this.age += 1; 
    }
    raiseSalary(commission){
        this.salary += commission;
    }
    toString(){
        return this.name + " " + this.age + " " +this.salary;
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
        this.raiseSalary(commission);
    }
    toString(){
        return super.toString();
    }
}

emp1 = new IT("Jean", 28, 1200, "JavaScript");
emp2 = new Sales("Jana", 26, 1200, 200);
emp3 = new Employee("Marc", 25, 1100);

cmp = new Company();
cmp.hire(emp1);
cmp.hire(emp2);
cmp.hire(emp3);

console.log("IT Employees: ");
cmp.getAllITEmployees();

console.log("Sales Employees: ");
cmp.getAllSalesEmployees();

console.log("All Employees: ");
cmp.toString();