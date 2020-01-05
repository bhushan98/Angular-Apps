import { Injectable } from '@angular/core';
import { Customer } from 'src/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  

  constructor() { }

  customers : Customer[] = [
    new Customer('Bhushan','newmail@gmail.com',9898989898,21),
    new Customer('Naman','namanmail@gmail.com',9797979797,24),
    new Customer('Isha','ishamail@gmail.com',8888888888,26),
    new Customer('Jyoti','jyotimail@gmail.com',7878787878,31)
  ];
  
  index : number;

  addCustomer(customer: Customer) {
    this.customers.push(customer);
  }
  

  listCustomer(){
    return this.customers;
  }

  findCustomer(name : string){
    let result = this.customers.filter(x => x.name == name);
    return result; 
  }

  sortByName(){
    this.customers.sort((a, b) => a.name > b.name ? 1 : ((a.name < b.name) ? -1 : 0));
    return this.customers;
  }

  sortByMail(){
    this.customers.sort((a, b) => a.email > b.email ? 1 : ((a.email < b.email) ? -1 : 0));
    return this.customers;
  }

  sortByMobile(){
    this.customers.sort((a, b) => a.mobile > b.mobile ? 1 : ((a.mobile < b.mobile) ? -1 : 0));
    return this.customers;
  }

  sortByAge(){
    this.customers.sort((a,b) => a.age > b.age ? 1 : ((a.age < b.age) ? -1 : 0));
    return this.customers;
  }

  deleteCustomer(index : number) {
    return this.customers.splice(index, 1);
  }
  
}
