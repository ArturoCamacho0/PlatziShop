import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { finalize } from 'rxjs/operators';

import { ProductService } from '@core/services/product.service';
import { Product } from '@core/services/product.model';
import { MyValidators } from '../../../utils/validators';

import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  form: FormGroup;

  image$: Observable<any>;

  constructor(
              private formBuilder: FormBuilder,
              protected productService: ProductService,
              private router: Router,
              private storage: AngularFireStorage
              ){
    this.buildForm();
  }

  ngOnInit(): void {
  }

  uploadFile(event){
    let dateAll = new Date();
    let date = `${dateAll.getFullYear()}${dateAll.getMonth() + 1}${dateAll.getDate()}`;
    const file = event.target.files[0];
    const name = date + file.name;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          this.form.get('image').setValue(url);
        });
      })
    ).subscribe();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const product: Product = this.form.value;
      this.productService.createProduct(product).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  get priceField(){
    return this.form.get('price');
  }

}
