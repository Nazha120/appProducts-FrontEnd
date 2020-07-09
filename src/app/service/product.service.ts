import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public host = 'http://localhost:8080/api/products/';

  constructor(private httpClient: HttpClient) {
  }
/*
  public allProducts() {
    return this.httpClient.get(this.host);
  }*/

  public allProducts(): Observable<HttpResponse<Array<Product>>>{
    return this.httpClient.get<Array<Product>>(this.host , {observe: 'response'});
  }
  public addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.host, product);
  }
}
