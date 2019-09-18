import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getWishes(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/wish-list');
  }

  postProduct(product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/wish-list', product);
  }

  changeIcon(id, status): Observable<Product> {
    return this.http.patch<Product>('http://localhost:3000/products/' + id, status);
  }

  deleteProduct(id): Observable<Product> {
    return this.http.delete<Product>('http://localhost:3000/wish-list/' + id);
  }
}
