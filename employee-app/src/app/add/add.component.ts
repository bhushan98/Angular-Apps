import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employee : EmployeeModel;
  constructor(private service:EmployeeService, private route:Router) { 
    this.employee = new EmployeeModel();
  }

  ngOnInit() {
  }

  addEmp(){
    this.service.addEmployee(this.employee);
    this.employee = new EmployeeModel();
    this.route.navigate(['list']);
  }

}
