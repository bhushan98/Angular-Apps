import { Injectable } from '@angular/core';
import { EmployeeModel } from '../model/employee.model';
import { b } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees : EmployeeModel[] = [];
  index : number;

  constructor() { }

  addEmployee(employee : EmployeeModel){
    this.employees.push(employee);
  }

  listEmployee(){
    return this.employees;
  }

  searchEmployee(ename : string){
    let result = this.employees.find(x => x.empName == ename);
    return result; // if found
  }

  sortEmployee(){
    return this.employees.sort();
  }

  deleteEmployee(index : number){
    return this.employees.splice(index, 1);
  }

  sortByName(){
    this.employees.sort((a, b) => a.empName > b.empName ? 1 : ((a.empName < b.empName) ? -1 : 0));
    return this.employees;  
  }

  sortBySalary(){
    this.employees.sort((a, b) => a.empSalary > b.empSalary ? 1 : ((a.empSalary < b.empSalary) ? -1 : 0));
    return this.employees;
  }

  sortById(){
    this.employees.sort((a, b) => a.empId > b.empId ? 1 : ((a.empId < b.empId) ? -1 : 0));
    return this.employees;
  }
  
}
