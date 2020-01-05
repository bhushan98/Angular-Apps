import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  employee : EmployeeModel;
  ename : string;
  found : boolean = false;
  
  
  constructor(private service:EmployeeService) {
  }

  ngOnInit() {
  }

  searchEmp(){
    this.employee = this.service.searchEmployee(this.ename);
    if(this.employee != null)
      this.found = true;
    else
      alert("Employee not found");
  }
}
