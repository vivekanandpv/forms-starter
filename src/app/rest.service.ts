import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable()
export class RestService {
  private authSubject = new BehaviorSubject<any>(null);
  private tokenDecoder = new JwtHelperService();

  constructor(private http: HttpClient) {
    this.authSubject.next(this.getDecodedStoredToken());
  }

  private storeToken(token) {
    sessionStorage.setItem('token', token);
  }

  getStoredToken() {
    return sessionStorage.getItem('token');
  }

  private getDecodedStoredToken() {
    return this.tokenDecoder.decodeToken(sessionStorage.getItem('token'));
  }

  private deleteStoredToken() {
    sessionStorage.removeItem('token');
  }

  get authStatus$() {
    return this.authSubject.asObservable();
  }

  set auth(token: string) {
    const decodedToken = this.tokenDecoder.decodeToken(token);
    this.storeToken(token);
    this.authSubject.next(decodedToken);
  }

  createProduct(product) {
    return this.http.post(`${environment.baseUrl}/items`, product);
  }

  login(label, userCredentials) {
    return this.http.post(
      `${environment.baseUrl}/auth/login/${label}`,
      userCredentials
    );
  }

  logout() {
    this.deleteStoredToken();
    this.authSubject.next(null);
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
