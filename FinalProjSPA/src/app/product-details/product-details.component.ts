import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductInterface } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
  
export class ProductDetailsComponent implements OnInit{

  constructor(
    private product_service: ProductService,
    private activated_root: ActivatedRoute,
    private router: Router
  ){}

  product!:ProductInterface
  id:number = 1

  ngOnInit(): void {
    this.id = +this.activated_root.snapshot.paramMap.get("id")!
    this.product_service.getProductById(this.id).subscribe(
      val => this.product = val
    )
  }

  add_to_cart() {
    this.product_service.addToCart()
  }
}
