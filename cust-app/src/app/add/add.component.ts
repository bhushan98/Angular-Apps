import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer/customer.service';
import { Router } from '@angular/router';
import { Customer } from 'src/customer.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  customer : Customer;
  ages : number[] = [];
  
  constructor(private service : CustomerService, private route : Router) { 
    this.customer = new Customer();
  }
  
  ngOnInit() {
    for(let i = 18; i<100 ;i++)
      this.ages[i-18] = i;
  }

  addCustomer(){
    this.service.addCustomer(this.customer);
    this.customer = new Customer();
    this.route.navigate(['list']);
  }

  publishAge(){
    
  }


}
