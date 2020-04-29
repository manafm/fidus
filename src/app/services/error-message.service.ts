import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ErrorMessageService {

  constructor(private translateService: TranslateService) { }

  config = {
      'required': () => this.translateService.get('errorMessage.required').subscribe( response => response),
      'email.invalid': () => this.translateService.get('errorMessage.email.invalid').subscribe(response => response),
      '1201': (code) => this.translateService.get('errorMessage.1201', {code: code}).subscribe(response => response),
    };


  getMessage(errorCode: string, param?): string {
    const result = this.config[errorCode];

    if (result) {
      return result(param);
    } else {
      console.warn('error code not found : ', errorCode);
    }
  }


}
