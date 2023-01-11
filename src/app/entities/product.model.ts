import {CategoryModel} from "./category.model";

export interface ProductModel {
    id:number;
    title:string;
    price:number;
    descripcion:string;
    category:CategoryModel;
}