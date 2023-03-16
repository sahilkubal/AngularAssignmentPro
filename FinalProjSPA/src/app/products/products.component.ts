import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductInterface } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  constructor(
    private product_service:ProductService
  ) { }
  
  products:ProductInterface[] = []

  ngOnInit(): void {
    this.product_service.getProducts().subscribe(data=>this.products=data)
  }

  add_to_cart() {
    this.product_service.addToCart()
  }
}
