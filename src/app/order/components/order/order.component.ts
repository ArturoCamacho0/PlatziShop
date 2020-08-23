import { Component, OnInit, Input } from '@angular/core';

import { Product } from '@core/services/product.model';
import { CartService } from '@core/services/cart/cart.service';
import { Observable, pipe } from 'rxjs';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;
  displayedColumns: string[] = ['image', 'title', 'pices', 'price', 'actions'];

  constructor(private cartService: CartService){
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

  addProduct(product: Product){
    this.cartService.addCart(product);
  }

}
