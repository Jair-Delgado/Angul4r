/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor(private httpClient:HttpClient) { }

  getProducts(){
    const url = 'https://api.escuelajs.co/api/v1/products'; 
    const response = this.httpClient.get(url).subscribe
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
      description: 'Camisa de vestir / Jair Delgado',
      images:["https://api.lorem.space/image?w=640&h=480&r=3575"],
      categoryId: 1
    }
     const url = 'https://api.escuelajs.co/api/v1/products/282';
    this.httpClient.put(url,data).subscribe
    (response=> {console.log(response);
    }); 
  }
}*/
