import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// This is the service class for the Product Service 

export class ProductService {

  products : ProductModel[] =[];
  
  constructor(private http : HttpClient) { 
    this.http.get<ProductModel[]>('../assets/products.json').subscribe(data => this.products = data);
  }

  listProducts(){
    return this.products;
  }

  searchProduct(input : string){
    let result = this.products.filter(x => x.name.toLowerCase() == input.toLowerCase() || x.category.toLowerCase() == input.toLowerCase() );
    return result; 
  }

  deleteProduct(index : number){
    return this.products.splice(index, 1);
  }

  
}
