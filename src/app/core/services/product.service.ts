import { Injectable } from '@angular/core';
import { Product } from '../../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: '1',
      title: 'Camiseta',
      image: '../../assets/images/camiseta.png',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      title: 'Hoodie',
      image: '../../assets/images/hoodie.png',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      title: 'Mug',
      image: '../../assets/images/mug.png',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      title: 'Pin',
      image: '../../assets/images/pin.png',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      title: 'Stickers',
      image: '../../assets/images/stickers1.png',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      title: 'Stickers',
      image: '../../assets/images/stickers2.png',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProduct(id: string){
    return this.products.find(item => id === item.id);
  }
}
