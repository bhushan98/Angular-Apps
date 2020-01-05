import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ProductModel } from '../model/product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products : ProductModel[];
  input : string;
  found : boolean = false;

  constructor(private service : ProductService) { }

  ngOnInit() {
  }

  searchProduct(){
    this.products = this.service.searchProduct(this.input);
    if(this.products.length == 0)
      alert("No Product Found");
    else
      this.found = true;
  }

}
