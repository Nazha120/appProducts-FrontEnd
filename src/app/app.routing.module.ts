import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {NewProductComponent} from './components/new-product/new-product.component';







const routes: Routes = [

  { path: 'products', component: ProductsComponent},
  { path: 'new-product', component: NewProductComponent},

  { path: '', redirectTo: 'new-product' , pathMatch: 'full' },


];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

