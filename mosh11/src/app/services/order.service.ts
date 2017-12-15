import { AuthHttp } from 'angular2-jwt';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp, private http: Http) {
  }

  getOrders() {

    // if I need to access a protected API it is better to use AuthHttp
    // like this:
    return this.authHttp.get('/api/orders')
      .map(response => response.json());

    // nevertheless I could achieve the same with the standard Http,
    // like this:
    // let headers = new Headers();
    // let token = localStorage.getItem('token');
    // headers.append('Authorization', 'Bearer ' + token);

    // let options = new RequestOptions({ headers: headers });
    // return this.http.get('/api/orders', options)
    //   .map(response => response.json());
  }
}
