import { Component, OnInit } from '@angular/core';
import { ProductService } from '@core/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void{
    this.fetchProducts();
  }

  fetchProducts(){
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string){
    this.productService.deleteProduct(id).subscribe(res => {
      console.log('Borrado');
      if (res) {
        const index = this.products.findIndex(product => product.id === id);
        this.products.splice(index, 1);
        this.products = [...this.products];
      }
    });
  }

}
