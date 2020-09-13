import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class RestService {
  private authSubject = new BehaviorSubject<any>(null);
  private tokenDecoder = new JwtHelperService();

  constructor(private http: HttpClient) {}

  get authStatus$() {
    return this.authSubject.asObservable();
  }

  set auth(token: string) {
    const decodedToken = this.tokenDecoder.decodeToken(token);
    console.log('Token decoded', decodedToken);
    this.authSubject.next(token);
  }

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
