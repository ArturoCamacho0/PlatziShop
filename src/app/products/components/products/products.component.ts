import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/services/product.model';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void{
    this.fetchProducts();
  }

  fetchProducts(){
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

}
