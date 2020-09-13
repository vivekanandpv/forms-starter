import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestService {
  constructor(private http: HttpClient) {}

  createProduct(product) {
    return this.http.post('http://localhost:3000/api/items', product);
  }
}
