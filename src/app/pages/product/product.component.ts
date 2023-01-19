import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/entities/product.model';
import { ProductHttpService } from '../../services/product-http.service';
import { UpdateProductModelDto } from '../../entities/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:ProductModel[]=[];
  selectedProduct:UpdateProductModelDto={};
  constructor(private productHttpService: ProductHttpService) {}

  ngOnInit(): void {
    this.getPoducts();
    this.getProduct(5);
    this.updateProduct();
    this.createProduct();
    this.deleteProduct(5);
  }
 getPoducts(){
   this.productHttpService.getAll().subscribe(
    response=>{
      this.products = response;
      console.log(response)
    })
 }
 getProduct(id:ProductModel[`id`]){
   this.productHttpService.getOne(id).subscribe(
    response=>{
      console.log(response)})
 }
 createProduct(){
  const data = {
    title: 'Zapatos power',
    price: 60,
    description: 'Calzado / Jair Delgado',
    images: [
      'https://m.media-amazon.com/images/I/51A+xXT0yiL._AC_SY580_.jpg',
    ],
    categoryId: 1,
  };
  this.productHttpService.store(data).subscribe(
    response=>{
      console.log(response)})
 }
 editProduct(product:ProductModel){
  this.selectedProduct= product;
 }
 updateProduct(){
  const data = {
    title: 'Camisas Polo',
    price: 25,
    description: 'Camisa casual / Jair Delgado',
  };
  this.productHttpService.update(1,data).subscribe(
    response => {
      console.log(response)})
 }
 deleteProduct(id:ProductModel[`id`]){
  this.productHttpService.destroy(id).subscribe(
    response=>{
      this.products=this.products.filter(product =>product.id!=id);
      console.log(response)})
 }
}
