import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    const response = this.httpClient.get('https://api.escuelajs.co/api/v1/products').subscribe
    (response=> {console.log(response);
    });
  }
  getProduct(){
    const response = this.httpClient.get('api.escuelajs.co/api/v1/products/8').subscribe
    (response=> {console.log(response);
    });
  }
  createProduct(){
    const data ={
      title: 'Libros',
      price: 15,
      descripcion: 'Utiles escolares / Jair Delgado',
      categoryId: 1,
    }
    const response = this.httpClient.post('api.escuelajs.co/api/v1/products/8',data).subscribe
    (response=> {console.log(response);
    });
  }
}
