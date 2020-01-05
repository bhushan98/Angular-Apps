import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  employees:EmployeeModel[];
  

  constructor(private service:EmployeeService) {
   }

  ngOnInit() {
    this.employees = this.service.listEmployee();
  }

  
  sortBySalary(){
    this.employees = this.service.sortBySalary();
  }

  sortByName(){
    this.employees = this.service.sortByName();
  }

  sortById(){
    this.employees = this.service.sortById();
  }


}
