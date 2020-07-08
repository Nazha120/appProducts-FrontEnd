import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {IProduct, Product} from '../../model/product.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  products: {};
  public product: IProduct = {};
  public message: boolean;
  public erreur: boolean;
  editForm: FormGroup;

  constructor(private creationProductService: ProductService,
              private productService: ProductService,
              private router: Router) {

  const formControls = {
    libelle: new FormControl('', [Validators.required]),
    reference: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required]),
  };
  this.editForm = new FormGroup(formControls);
  }

 ngOnInit(): void {
  }

  onSaveProduct() {
    this.displayMessageAlert();
    if (!this.editForm.valid) {
      return;
    }
    this.product = {
      libelle: this.editForm.value['libelle'],
      reference: this.editForm.value['reference'],
      prix: this.editForm.value['prix']
    }
    this.creationProductService.addProduct(this.product)
      .subscribe(res => {
        this.displayMessageAlert(true);
      }, err => {
        this.displayMessageAlert(false, true);
      });
  }

  displayMessageAlert(message?: boolean, erreur?: boolean): void {
    this.message = message;
    this.erreur = erreur;
  }
}

