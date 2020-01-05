import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer/customer.service';
import { Customer } from 'src/customer.model';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  cname : string;
  customers : Customer[];
  found : boolean = false;
  constructor(private service : CustomerService) { }

  ngOnInit() {
  }

  findCustomer(){
    this.customers = this.service.findCustomer(this.cname);
    if(this.customers.length != 0)
     this.found = true;  
    else  
     alert("No customer found!");
      
  }
}
