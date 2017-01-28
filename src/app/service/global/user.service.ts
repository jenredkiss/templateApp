import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { User } from './../../model/user.model';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  authenticate(username, password): Observable<any> {
    return this.http.post('/api/authenticate', { name: username, password: password})
                    .map(response => {
                      console.log('Service', response);    
                      return response.json();
                    })
                    .flatMap(resJson => {
                      if (resJson.token) {
                        let headers = new Headers({'x-access-token': resJson.token});
                        let options = new RequestOptions({ headers: headers });
                        return this.getUser(options);
                      }
                      return Observable.throw(resJson);
                    });
    }

  getUser(options): Observable<User> {
    return this.http.get('/api/users', options)
                          .map(user => {
                            console.log('USER', user);
                            return user.json();
                          })
                          .catch(err => {
                            return err.json();
                          });
  }
}
