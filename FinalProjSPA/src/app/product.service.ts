import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInterface } from './products';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http : HttpClient
  ) { }

  
  getProducts() {
    return this.http.get<ProductInterface[]>("https://api.escuelajs.co/api/v1/products")
  }

  getProductById(id: number) {
    return this.http.get<ProductInterface>(`https://api.escuelajs.co/api/v1/products/${id}`)
  }

  cart_value=0
  cart_value$ = new Subject<number>()

  addToCart() {
    this.cart_value += 1
    this.cart_value$.next(this.cart_value)
  }

  getCartValue() {
    return this.cart_value$
  }
}
