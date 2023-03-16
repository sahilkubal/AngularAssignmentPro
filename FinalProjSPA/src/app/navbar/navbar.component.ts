import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(
    private product_service:ProductService
  ) { }

  cartValue = 0

  ngOnInit(): void {
    this.product_service.getCartValue().subscribe(val => this.cartValue=val)
  }
}
