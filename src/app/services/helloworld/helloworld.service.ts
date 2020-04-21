import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AbstractBaseService } from '../abstract-base-service';

@Injectable({
  providedIn: 'root' //ce parametre c'est pour dire que cette class est un service injectable
})
export class HelloworldService extends AbstractBaseService {

  private baseUrl = 'welcome/';

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8081/fidus-monitoring/');
  }

  public helloWorld(): Observable<any> {
    return this.http.get('http://localhost:8081/');
  }

  public listUsers(): Observable<any> {
    return this.http.get('http://localhost:8081/users');
  }
}
