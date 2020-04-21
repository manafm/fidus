import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import { Inject } from '@angular/core';

export abstract class AbstractBaseService {

  private accessToken: String;


  constructor(protected http: HttpClient,
              protected backApiServiceUrl: string) {
    // this.accessToken = this.briamOidcService.accessToken;
    // this.briamOidcService.isAuthenticated$.subscribe(isAuth => {
    //   if (isAuth) {
    //     this.connectedUserService.getCurrentUser().subscribe(user => {
    //       this.connectedUser = user;
    //     });
    //   }
    // });
  }

  protected buildRestUrl(urlSuffix: string): string {
    return this.backApiServiceUrl + urlSuffix;
  }

  protected callGet(urlSuffix: string, parameters?: HttpParams, options?): Observable<any> {
    /*
    if (parameters == null) {
      options = this.initOptions(options, true);
    } else {
      options = this.initOptions(options, true, parameters);
    }
    */
    options = this.initOptions(options, true, parameters);
    return this.http.get(this.buildRestUrl(urlSuffix), options).pipe(map(this.extractData), catchError(this.handleError));
  }

  protected callDelete(urlSuffix: string, parameters?: HttpParams, options?): Observable<any> {
    options = this.initOptions(options, true, parameters);
    return this.http.delete(this.buildRestUrl(urlSuffix), options).pipe(map(this.extractData), catchError(this.handleError));
  }

  protected callPost(urlSuffix: string, body: object, options?): Observable<any> {
    options = this.initOptions(options, true);
    return this.http.post(this.buildRestUrl(urlSuffix), body, options).pipe(map(this.extractData), catchError(this.handleError));
  }

  protected callPut(urlSuffix: string, body: object, options?): Observable<any> {
    options = this.initOptions(options, true);
    return this.http.put(this.buildRestUrl(urlSuffix), body, options).pipe(map(this.extractData), catchError(this.handleError));
  }

  protected initOptions(options?, withContentType?: boolean, parameters?) {


    /* Normally no longer necessary with auto refresh
    if (!this.briamOidcService.hasValidAccessToken()) {
      console.log('API service : accesst token invalid so Silent refresh called!!');
      // TODO is this necessary ??
      // this.briamOidcService.getOAuthService().oidc = false;
      this.briamOidcService.refresh();
    }*/

    if (!options) {
      options = {
        headers: { 'Accept': 'application/json' }
      };
    }
    if (!options.hasOwnProperty('headers')) {
      options['headers'] = { 'Accept': 'application/json' };
    }
    if (!options.headers.hasOwnProperty('Accept')) {
      options['headers']['Accept'] = 'application/json';
    }
    if (withContentType && !options.headers.hasOwnProperty('Content-Type')) {
      options['headers']['Content-Type'] = 'application/json';
    }


    // if (!options.hasOwnProperty('withCredentials')) {
    //   options['withCredentials'] = true;
    // }
    if (parameters) {
      options['params'] = parameters;
    }
    return options;
  }

  protected handleError(error: any): Observable<any> {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    if (error.error.messages) {
      errMsg = 'Backend error with code : ' + error.error.messages[0].code + ' meaning : ' + error.error.messages[0].description;
    }
    console.error(errMsg + ' : ', error); // log to console instead
    return observableThrowError(error);
  }

  protected extractData(data): any {
    if (data === null || data === undefined) {
      return null;
    } else {
      if (data.response === undefined || data.response === null) {
        return data;
      }
      return data.response;
    }
  }
}
