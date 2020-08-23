import { Component, OnInit } from '@angular/core';
import { Product } from '@core/services/product.model';
import { ProductService } from '@core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.css']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void{
    this.fetchProducts();
  }

  // tslint:disable-next-line: typedef
  fetchProducts(){
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

}
