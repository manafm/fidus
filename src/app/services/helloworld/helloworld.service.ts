import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AbstractBaseService } from '../abstract-base-service';
import { Person } from 'src/app/models/person';

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

  public getPerson(): Observable<Person> {
    const uri = 'person';
    return this.callGet(uri).pipe(
      map(resp => {
        console.log('Hello Wget personorld ::::', resp);
        return resp;
      })
    );
  }
}
