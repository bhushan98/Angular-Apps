import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ProductModel } from '../model/product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  constructor(private service : ProductService) { }

  products : ProductModel[];
  

  ngOnInit() {
    this.products = this.service.listProducts();
  } 

  deleteProduct(index : number){
    var ans = confirm("Are you sure want to delete the product??");
    if(ans)
      this.service.deleteProduct(index);
  }

}
