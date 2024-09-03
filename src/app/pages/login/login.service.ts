import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { IUsuario } from '../usuario/usuario.interface';
import { ILogin } from './login.interface';

const JWT_KEY = 'jwt-key';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  JWTHelper = new JwtHelperService();
  currentUser = new BehaviorSubject<IUsuario | null>(null);

  constructor(private readonly _router: Router) {
    this.handleCurrentSession();
  }

  get isLoggedIn(): boolean {
    return !!this.currentUser.getValue();
  }

  handleCurrentSession(): void {
    const jwt: string | null = this.getLocalStorage(JWT_KEY);

    if (!jwt) return;

    try {
      const user: IUsuario | null = this.JWTHelper.decodeToken(jwt);
      this.currentUser.next(user);
    } catch (error) {
      this.logout();
    }
  }

  login(payload: ILogin) {
    this.handleLogin(token);
  }

  logout() {
    this.currentUser.next(null);
    this.removeLocalStorage(JWT_KEY);
    this._router.navigate(['/login']);
  }

  private setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  private getLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  private removeLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  private handleLogin(jwt: string): void {
    const user: IUsuario | null = this.JWTHelper.decodeToken(jwt);
    this.currentUser.next(user);
    this.setLocalStorage(JWT_KEY, token);
    this._router.navigate(['/']);
  }
}
