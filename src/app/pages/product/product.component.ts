import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ProductHttpService } from '../../services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
   // this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    this.deleteProduct();
  }
  getProducts(){
    const url = 'https://api.escuelajs.co/api/v1/products'; 
    const response = this.httpClient.get(url).subscribe
    (response=> {console.log(response);
    });
  }
  getProduct(){
    const response = this.httpClient.get('https://api.escuelajs.co/api/v1/products/8').subscribe
    (response=> {console.log(response);
    });
  }
  createProduct(){
    const data ={
      title: 'Libros',
      price: 15,
      description: 'Utiles escolares / Jair Delgado',
      images:["https://api.lorem.space/image?w=640&h=480&r=3575"],
      categoryId: 1
    }
     const url = 'https://api.escuelajs.co/api/v1/products';
    this.httpClient.post(url,data).subscribe
    (response=> {console.log(response);
    });
  }

  updateProduct(){
    const data ={
      title: 'camisas polo',
      price: 20,
      description: 'Camisa de casual / Jair Delgado',
      images:["https://api.lorem.space/image?w=640&h=480&r=3575"],
      categoryId: 1
    }
     const url = 'https://api.escuelajs.co/api/v1/products/8';
    this.httpClient.put(url,data).subscribe
    (response=> {console.log(response);
    });
  }

  deleteProduct(){
     const url = 'https://api.escuelajs.co/api/v1/products/200';
    this.httpClient.delete(url).subscribe
    (response=> {console.log(response);
    });
  }
}
