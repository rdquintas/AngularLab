import { BadInput } from './../common/bad-input';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable()
export class DataService {
    constructor(private url: string, private http: Http) {

    }

    getAll() {
        return this.http.get(this.url)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 404) {
            return Observable.throw(new NotFoundError());
        } else if (error.status === 400) {
            return Observable.throw(new BadInput());
        } else {
            return Observable.throw(new AppError(error));
        }
    }
}
