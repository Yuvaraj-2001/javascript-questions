class Employee {
    constructor(id, name){
        if(!id || !name){
            throw new Error('Require "id" and "name"');
        }
        this.id = id;
        this.name = name;
    }
    get getSalary(){
        return this.salary;
    }
    set setSalary(number){
        this.salary = number;
    }
}


const emp1 = new Employee("#3619", "Yuvaraj");  
emp1.setSalary = 100;
// console.log(emp1.getSalary);

// WE will proceeding with extending this employee class
class Manager extends Employee{
    constructor(id, name){
         // Incorrect: using 'this' before calling 'super()'
         // this.department = "depart"; // This will cause the error
        super(id, name);
        this.department = "depart";
        
    }
    set setDepartment(name){
        this.department = name;
    }
    get getDepartment(){
        return this.department;
    }
}

const man1 = new Manager('#340', 'Manager');
console.log(man1);

