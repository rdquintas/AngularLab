import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) {
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials)).map(response => {
        const result = response.json();
        if (result && result.token) {
          // Here we store the token inside localStorage
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {

    // this function belongs angular2-jwt library
    // and it does exactly the same thing we coded below
    return tokenNotExpired();

    // const jwtHelper = new JwtHelper();
    // const token = localStorage.getItem('token');

    // if (!token) {
    //   return false;
    // }

    // const expDate = jwtHelper.getTokenExpirationDate(token);
    // const isExpired = jwtHelper.isTokenExpired(token);

    // return !isExpired;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    return new JwtHelper().decodeToken(token);
  };
}

