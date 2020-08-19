import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { CartService } from '../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';

import { AuthService } from '../../../core/services/auth/auth.service';
import { AdminGuard } from '../../../admin.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;

  user: boolean;

  constructor(private cartService: CartService, private authService: AuthService, private guard: AdminGuard){
    this.total$ = cartService.cart$.pipe(
      map(products => products.length)
    );
  }

  ngOnInit(): void{}

}
