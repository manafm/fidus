import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FidusService {

  basePath = 'http://localhost:8081';

  constructor(private http: HttpClient) {
  }

  fetchConsumers(): Observable<any> { // TODO il faut créer le model Consumer
    return this.http.get(`${this.basePath}/consumers`);
  }

}
