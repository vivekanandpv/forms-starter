import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestService {
  constructor(private http: HttpClient) {}

  createProduct(product) {
    return this.http.post('http://localhost:3000/api/items', product);
  }

  login(label, userCredentials) {
    return this.http.post(
      `http://localhost:3000/api/auth/login/${label}`,
      userCredentials
    );
  }

  getAdminResources() {
    return this.http.get('http://localhost:3000/api/auth/resource/admin');
  }

  getManagerResources() {
    return this.http.get('http://localhost:3000/api/auth/resource/manager');
  }

  getUserResources() {
    return this.http.get('http://localhost:3000/api/auth/resource/user');
  }
}
