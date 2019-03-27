# Object-Oriented Programming

In this exercise, you are going to get an understanding of how OOP works. And then, you are going to apply its concepts to create classes and connect them between each others.

As the name states, Object-Oriented Programming (OOP) is based on using objects. A simple example of an object would be an Employee at a company. Logically, the employee has a name, age, and a salary. Using OOP, you can create your own Employee class and assign whatever properties you want to it (name, age, salary). Instead of rewriting code multiple times for each employee you have, you would use this class. There are more aspects to OOP, we will discuss them through the tutorial.

The end goal is to create a system for a company with different types of employees. We will go through the process step by step and discuss each step.

## Pre-requisites 

You will need basic knowledge of JavaScript (variables, operators, functions, conditions, loops, and arrays).

You can also read [this](https://www.quora.com/Why-do-we-need-classes-in-object-oriented-programming) if you still want to know why doing the exercise is important

## Goals

- Create Classes
- Understand contructors and class methods
- Inheritance
- <b>Competencies:</b>
    - <kbd>OOP</kbd>
    - <kbd>Inheritence</kbd>

## Instructions

- Fork this repo
- Clone it to your laptop
- Create a file called main.js

### Getting Started

First, let's discuss why OOP is important.


When you write `var number = 1`, what you are metaphorically doing is creating an object of type `var`, naming it `number`, and assigning its value to `1`. 

Figuratively, there's a class called `var` to which I can assign a `name` and a `value`. 

Thus, creating the class `Employee` now allows us to create an `object` of type `Employee`.

Cool! Now, let's create this class in `main.js`: 

```
class Employee {
    
}
```

#### Defining Constructor:

As we discussed previously, the class `var` can have a `name` and a `value`.

To set the values of class, we usually use a `constructor`.

As the naming suggests, the `constructor` builds the `class`. 

`Example:` Assume that you're building a house. In your opinion, what should the constructor know ? Off the top of my head, I can think of `walls`, `flooring`, `ceiling`, `furniture`, `numberOfRooms`... 

Since we can give our constructor any values we want, we decided to start by giving our `Employee` a `name`

Then, let's add the constructor to our `class`:

```
class Employee {
    constructor(name){

    }    
}   
```

#### Using Constructor:

Now, let's set the value of `name`: 

```
class Employee {
    constructor(name){
        this.name = name;
    }    
}   
```

`this` represents the class. Consequently, `this.name` represents the `class name`. And `name` represents the parameter of the function `constructor`.

What we did here is set the `name` of `Employee` to whatever parameter was sent to the `constructor`.

#### Using The Class

Now, let's add the following to our `main.js`:

```
emp = new Employee("Jean");
console.log(emp.name);
```

The first line here creates an object of type `Employee` and gives it the name `Jean` as a String. The `constructor` of `Employee` will take whatever value we gave it and set it as the `name` of `Employee`.

Run `main.js` by writing `node main.js` in a terminal. 

The console should display `Jean`.

Cool! Now, you should be able to understand the keywords:
- class 
- constructor

If you don't, a smart move would be to go back and repeat `Getting Started`.

### Working with Classes

Now, it's time to add a few attributes and methods to our employee.

Let's start by adding `age` and `salary`.

```
class Employee {
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }    
}   
```
As we did for the `name`, each attribute can be taken as a parameter for the constructor and we need to assign it using `this`.

Accordingly, we must update the class creation:

replace 

```
emp = new Employee("Jean");
console.log(emp.name);
```

with

```
emp = new Employee("Jean", 28, 1200);
console.log(emp);
```

Run it. You should see this: `Employee { name: 'Jean', age: 28, salary: 1200 }`

>`Note:` The class can have attributes that aren't taken as parameters in the constructor. For example, we can add to our constructor: <br><br>
this.employed = true;<br><br>
`employed` here isn't taken as parameter. However, our class will have it as one of its attributes and will set it by default to `true`.<br><br>
Let's forget about `employed` for the time being.

We also want some methods in our Employee class:
- IncrementAge(): increases the age of the Employee by 1
- raiseSalary(percentage): increases the salary of the percentage taken as parameter
- toString(): returns the Employee's data in order: `name`, `age`, `salary`.

#### IncrementAge():

```
class Employee {
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }    
    incrementAge(){
        this.age += 1; // this.age = this.age + 1   
    }
}   
```

Let's test it, replace:

```
emp = new Employee("Jean", 28, 1200);
console.log(emp);
```

with

```
emp = new Employee("Jean", 28, 1200);
console.log(emp);
emp.incrementAge();
console.log(emp);
```

You will notice the difference in the age of emp before and after calling the method.

#### raiseSalary(percentage)

Directly under incrementAge(), add the following:

```
    raiseSalary(percentage){
        this.salary *= (percentage/100 + 1);
    }
```

Let's test it, replace:

```
emp = new Employee("Jean", 28, 1200);
console.log(emp);
emp.incrementAge();
console.log(emp);
```

with

```
emp = new Employee("Jean", 28, 1200);
console.log(emp);
emp.incrementAge();
emp.raiseSalary(10);
console.log(emp);
```

You will notice the difference in the salary of emp before and after calling the method.

#### toString()

Directly under raiseSalary(percentage), add the following:

```
    toString(){
        return this.name + " " + this.age + " " + this.salary;
    }
```

Let's test it, replace:

```
emp = new Employee("Jean", 28, 1200);
console.log(emp);
emp.incrementAge();
console.log(emp);
```

with

```
emp = new Employee("Jean", 28, 1200);
console.log(emp.toString());
emp.incrementAge();
emp.raiseSalary(10);
console.log(emp.toString());
```

You will notice that we can now use toString() inside console.log() to write the data in any way or order we want.

Cool! Now, you should be able to understand the keywords:
- class properties
- class functions

If you don't, a smart move would be to go back and repeat `Working with Classes`.

### Inheritence

Great! Now that we have a class Employee, we want to have different types of employees. We can simply add the property `type` to the constructor of `Employee` right ?

Sure, but what if different types of employees have their own properties. For example, the `IT` employee should have a `specialty` property in addition to name, age, and salary.

Making this manually would make things complicated, and we would be repeating ourselves. Thus, comes the concept of `Inheritence`. 

In real life, the children inherit the genes of their parents. The same thing happens with classes: When a class `inherits` another class. We call the `inherited` class `Parent` and the `inheriting` class `Child`. 

Thus, the `Child` has all the properties of the `Parent` and more... In the above example, the class `Sales` can now `inherit` the class `Employee`. Subsequently, the class `IT` will have all the properties of `Employee` (name, age, salary) and a specific propery `specialty` (and more if needed).

Let's implement the class `IT`. In `main.js` write below the class `Employee`:

```
class IT extends Employee{

}
```

`extends` is the keyword for inheriting a class. Now, let's add the constructor.

```
class IT extends Employee{
    constructor(name, age, salary, specialty){
        super(name, age, salary);
        this.specialty = specialty;
    }
}
```

You will notice that we didn't fill the values of name, age, and salary. Instead, we used the keyword `super` to indentify the values of `Employee`. Basically, `super` calls the constructor of the parent (`Employee`) and sends its values from the constructor of the child (`IT`).

However, since specialty is a property only for `IT`. It should be set by the constructor of IT.

#### Overriding

Do you remember the function `toString()` we implemented in `Employee` ? If you don't, go back to Employee and check it again because now, we want to update it to also include `specialty`.

We call the process of using and updating the parent's function `Overriding`.

Add the following below the constructor of IT:

```
toString(){
    var string = super.toString();
    return string + " " + this.specialty;
}
```

As discussed above, `super` indentifies the parent which is `Employee`. Thus, `super.toString()` identifies the function `toString()` of `Employee`.

The `toString()` function of `Employee` returns the properties of the employee (name, age, and salary). We want to add the specialty when it comes to an `IT` employee. 

We we did here is get all the properties from Employee. Add the specialty, and return them all as a String.

Great! Let's test it, replace:

```
emp = new Employee("Jean", 28, 1200);
console.log(emp.toString());
emp.incrementAge();
emp.raiseSalary(10);
console.log(esalary + mp.toString());
```

with:

```
emp = new IT("Jean", 28, 1200, "JavaScript");
console.log(emp.toString());
```

run `main.js`, the console should print:

```
Jean 28 1200 JavaScript
```

#### Another child

Now that you know how to create children of classes. You should be able to create the following class that extends `Employee`:

The `Sales` class `extends` Employee. It has the same properties of Employee with the addition of `commission`. It also has the same `toString()` method as its parent.

However, in the constructor of `Sales`, you should update the salary so that you add to it the commission. 

>Reminder: The child inherits the parent's functions and is able to use them.

Try to follow the same steps used in creating `IT` class and do this on your own. If you can't, scroll down to see the solution.

```
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
```

Great! Let's test it:

```
emp1 = new IT("Jean", 28, 1200, "JavaScript");
console.log(emp1.toString());
emp2 = new Sales("Jana", 26, 1200, 200);
console.log(emp2.toString())
```

run `main.js`, the console should print:

```
Jean 28 1200 JavaScript
Jana 26 1400
```

Cool! Now, you should be able to understand the keywords:
- Inheritence
- Super
- Override

If you don't, a smart move would be to go back and repeat `Inheritence`.

### Creating The Company

Now that we have objects of type `Employee`, and employees of type `IT` and `Sales`, we are ready to create the `Company` that will hire our employees.

The `Company` is also a class that has as property `employees[]` which is an array of type `Employee`. In this array, we will store all our employees.

It also has the function `hire(employee)` which takes an employee and adds it to the array. 

Additionally, it has the following methods:

- `getAllSalesEmployees()` method which returns all employees of type `Sales`
- `getAllITEmployees()` method which returns all employees of type `IT`
- `toString()` method which loops through the array and prints the `toString()` method of each employee.    

Great! Let's start the implementation:

```
class Company{
    constructor(){
        this.employees = [];
    }
}
```

You will notice that the constructor here doesn't take any parameter. We did it this way because we want to have an empty array by default.

This is where the `hire(employee)` method comes to action. Add this method to `Company`:

```
    hire(employee){
        this.employees.push(employee);
    }
```

#### instanceof

Now, we want to separate `Sales` from `IT` employees. However, the class `Company` doesn't know which is which.

We use the keyword `instanceof` between a parent and a child to check if the element is an instance of the child.

for example:

```
emp1 = new IT("Jean", 28, 1200, "Java");
emp2 = new Sales("Jana", 26, 1200, 200);
emp3 = new Employee("Marc", 25, 1100);
```

Here, emp1, emp2, and emp3 are all instances of `Employee`. However, `emp1` is also an instance of `IT`, and `emp2` is also an instance of `Sales`.

Using this keyword, we can identify Sales employees from IT employees or normal employees.

Add these methods to `Company`:

```
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
```

So we're mapping over the array, checking if the element is an instance of `Sales` and returning it accordingly (Same for IT).

#### toString()

Add this method to `Company`:

```
toString(){
        this.employees.map((employee) => {
            console.log(employee.toString());
        });
}
```

so we're mapping over the array of employees, and calling the toString() method of each employee.

Wow! Let's test these functions:

```
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
```

As expected, you will notice that only emp1 is displayed when calling getAllITEmployees(), only emp2 is displayed when calling getAllSalesEmployees(), and all of them (including emp3) are displayed when calling toString().

Hope you enjoyed this tutorial!

Please send me any feedback you find useful to omar@codi.tech.