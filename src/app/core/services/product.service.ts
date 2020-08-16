import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    // Para tomar todos los registros del producto los tomamos en un array con GET
    return this.http.get<Product[]>(`${environment.urlApi}products/`);
  }

  getProduct(id: string){
    // Para tomar solo un producto debemos pasarle el id a la URL con GET
    return this.http.get<Product>(`${environment.urlApi}products/${id}`);
  }

  createProduct(product: Product){
    // Para crear nuevos productos debemos pasarle la URL y el producto
    return this.http.post(`${environment.urlApi}products/`, product);
  }

  updateProduct(id: string, changes: Partial<Product>){
    // Para actualizar un producto le pasamos la URL con el id y luego el o los cambios
    return this.http.put(`${environment.urlApi}products/${id}`, changes);
  }

  deleteProduct(id: string){
    return this.http.delete(`${environment.urlApi}products/${id}`);
  }
}
