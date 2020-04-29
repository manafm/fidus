export class NotificationConfig {

  constructor() {
    if (!this.hasOwnProperty('translate')) {
      this.translate = true;
    }
    if (!this.hasOwnProperty('unique')) {
      this.unique = true;
    }
  }

  summary?: string;
  summaryParams?: Object;
  detail: string;
  detailParams?: Object;
  life?: number;
  unique?: boolean;
  translate?: boolean;
  clearOnRouteChange?: boolean;
  errorMessage?: boolean;
  param?: string;
}
