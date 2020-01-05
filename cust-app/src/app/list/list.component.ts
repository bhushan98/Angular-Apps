import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer/customer.service';
import { Customer } from 'src/customer.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customers : Customer[];
  constructor(private service : CustomerService) { }

  ngOnInit() {
    this.customers = this.service.listCustomer();
  }

  deleteCustomer(index : number){
    var ans = confirm("Are you sure want to delete ??");
    if(ans)
      this.service.deleteCustomer(index);
  }

  sortByName(){
    this.customers = this.service.sortByName();
  }

  sortByAge(){
    this.customers = this.service.sortByAge();
  }

  sortByMobile(){
    this.customers = this.service.sortByMobile();
  }

  sortByMail(){
    this.customers = this.service.sortByMail();
  }

}
