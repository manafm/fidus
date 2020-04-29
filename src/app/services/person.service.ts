import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Person } from 'src/app/models/person';
import {AbstractBaseService} from "./abstract-base-service";

@Injectable({
  providedIn: 'root' //ce parametre c'est pour dire que cette class est un service injectable
})
export class PersonService extends AbstractBaseService {

  private baseUrl = 'person/';

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8081/fidus-monitoring/');
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
