import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@core/services/product.model';
import { ProductService } from '@core/services/product.service';

import { CartService } from '@core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void{}

  addCart(): any{
    this.cartService.addCart(this.product);
    //console.log(this.product);
  }
}
