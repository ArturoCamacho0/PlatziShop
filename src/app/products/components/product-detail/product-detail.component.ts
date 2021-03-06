import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '@core/services/product.service';
import { Product } from '@core/services/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
              private route: ActivatedRoute,
              private productService: ProductService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }


  fetchProduct(id: string){
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
      console.log(product);
    })
  }
}
