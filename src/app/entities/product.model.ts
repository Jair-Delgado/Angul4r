import {CategoryModel} from "./category.model";

export interface ProductModel {
    id:number;
    title:string;
    price:number;
    description:string;
    images:string[];
    category:CategoryModel;
}
export interface CreateProductModelDto extends Omit<ProductModel,'id' | 'category'>{
  categoryId:number; 
}
export interface UpdateProductModelDto extends Partial<ProductModel> {
  categoryId?:number;
}