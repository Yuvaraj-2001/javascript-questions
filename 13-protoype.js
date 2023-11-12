// Design a class using prototypes

var Employee = function (id, name){
    if(!id || !name){
        throw new Error('Require "id" and "name"');
    }
    this.id = id;
    this.name = name;

   
}
Employee.prototype.getSalary = function(){
    return this.salary;
}
Employee.prototype.setSalary = function(number){
    this.salary = number;
}

/// successfully created a class with prototypes

// Now let's Extend this
var Manager = function(params){
    Employee.apply(this, arguments);
}
// copy the prototype
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructer = Manager;

Manager.prototype.getDepart = function(){
    return this.department;
}
Manager.prototype.setDepart = function(name){
  this.department = name;
}

const copy = new Manager("#660", "copy");
console.dir(copy)