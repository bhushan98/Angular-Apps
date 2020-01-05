import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees : EmployeeModel[];
  constructor(private service:EmployeeService) { }

  ngOnInit() {
    this.employees = this.service.listEmployee();
  }

  delete(index : number){
    var ans = confirm("Are You Sure You Want To Delete ??");
    if(ans){
      this.service.deleteEmployee(index); //delete from service
    }
  }

  
}
