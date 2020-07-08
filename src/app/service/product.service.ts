import {HttpClient} from '@angular/common/http';
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

  public allProducts() {
    return this.httpClient.get(this.host);
  }

  public getProducts(mc: string, page: number, size: number) {
    return this.httpClient.get(this.host + 'search' + '?mc=' + mc + '&page=' + page + '&size=' + size);
  }

  public getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.host + id);
  }

  public addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.host, Product);
  }
}
