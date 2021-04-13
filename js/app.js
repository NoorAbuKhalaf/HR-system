'use strict';
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// console.log(random(100,500));

function Employee (name, email, department, salary) {
  this.name = name;
  this.email = email;
  this.department = department;
  this.salary = salary;
}


