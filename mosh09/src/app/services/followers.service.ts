import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FollowersService extends DataService {
  constructor(http: Http) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }
}
