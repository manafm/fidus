import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {RouteInfo} from '../components/sidebar/sidebar.component';
import {Message, MessageService} from "primeng/api";
import {ErrorMessageService} from "../../services/error-message.service";
import {NotificationConfig} from "../../models/notification-config";
import {UiNotificationMessage} from "../../models/ui-notification-message";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class UiNotificationService {

  public SEVERITY = {
    INFO: 'info',
    SUCCESS: 'success',
    WARN: 'warn',
    ERROR: 'error'
  };

  private DEFAULT_SUMMARY = {
    INFO: 'global.info',
    SUCCESS: 'global.success',
    WARN: 'global.warning',
    ERROR: 'global.error'
  };

  private DEFAULT_DETAIL = {
    ERROR: 'errorMessage.ErrorOccurred'
  };

  private notifications: Message[] = [];
  private menuItems: any[] = [];
  private notificationsSubject: Subject<Message[]> = new BehaviorSubject<Message[]>([]);
  private menuItemsSubject: Subject<any[]> = new BehaviorSubject<any[]>([]);
  public notification$: Observable<Message[]> = this.notificationsSubject.asObservable();
  public menuItems$: Observable<any[]> = this.menuItemsSubject.asObservable();

  constructor(private translateService: TranslateService,
              private errorMessageService: ErrorMessageService,
              private messageService: MessageService) {
  }

  private add(severity: string, notification: NotificationConfig, param?: string) {
    // Object assign is necessary to set default value to properties that may not have been set. ex: unique and translate.
    notification = Object.assign(new NotificationConfig(), notification);
    const message: Message = this.createMessage(severity, notification, param);

    if (!notification.unique) {
      return this.addMessage(message, notification.life);
    } else {
      const existingMessage = this.notifications.find(m => m.detail === message.detail && m.severity === message.severity);
      if (existingMessage) {
        this.deleteMessage(existingMessage);
      }
      return this.addMessage(message, notification.life);
    }
  }

  private createMessage(severity: string, notification: NotificationConfig, param?: string): UiNotificationMessage {
    const message: UiNotificationMessage = {
      severity: severity
    };

    if (param === undefined) {
      param = '';
    }

    if (notification.hasOwnProperty('clearOnRouteChange')) {
      message.clearOnRouteChange = notification.clearOnRouteChange;
    } else {
      message.clearOnRouteChange = (severity !== this.SEVERITY.SUCCESS);
    }

    if (notification.life) {
      message.life = notification.life;
    }

    if (!notification.summary) {
      notification.summary = this.getDefaultSummary(severity, notification.translate);
    }
    if (notification.translate) {
      if (notification.summaryParams) {
        this.translateService.get(notification.summary, notification.summaryParams).subscribe(response => message.summary = response);
      } else {
        this.translateService.get(notification.summary).subscribe(response => {
          message.summary = response;
        });
      }
      if (notification.detailParams) {
        if (notification.errorMessage) {
          message.detail = this.errorMessageService.getMessage(notification.detail, notification.detailParams) + ' ' + param;
        } else {
          this.translateService.get(notification.detail).subscribe(response => message.detail = response);
        }
      } else {
        if (notification.errorMessage) {
          message.detail = this.errorMessageService.getMessage(notification.detail) + ' ' + param;
        } else {
          this.translateService.get(notification.detail).subscribe(response => message.detail = response + ' ' + param);
        }
      }
    } else {
      message.summary = notification.summary;
      message.detail = notification.detail + ' ' + param;
    }
    return message;
  }

  private addMessage(message: Message, life: number) {
    this.notifications = [...this.notifications, message];
    this.notificationsSubject.next(this.notifications);
    if (life) {
      setTimeout(() => {
        this.deleteMessage(message);
      }, life);
    }
    this.messageService.add(message);
    return message;
  }

  updateMenuItems(items: RouteInfo[]) {
    this.menuItems = items.filter(menuItem => menuItem);
    this.menuItemsSubject.next(this.menuItems);
    return items;
  }

  private getDefaultSummary(severity: string, translate: boolean) {
    let summary: string;
    if (translate) {
      // actual translation done later
      summary = this.DEFAULT_SUMMARY[severity.toUpperCase()];
    } else {
      // translation won't happen later so do it now
      this.translateService.get(this.DEFAULT_SUMMARY[severity.toUpperCase()]).subscribe(response => summary = response);
    }
    return summary;
  }

  info(notification: NotificationConfig) {
    notification.life = 4000;
    return this.add(this.SEVERITY.INFO, notification);
  }

  success(notification: NotificationConfig) {
    if (!notification.life && notification.life !== 0) {
      notification.life = 4000;
    }
    return this.add(this.SEVERITY.SUCCESS, notification);
  }

  warn(notification: NotificationConfig) {
    notification.life = 4000;
    return this.add(this.SEVERITY.WARN, notification);
  }

  error(notification?: NotificationConfig, param?: string) {
    const severity = this.SEVERITY.ERROR;
    notification.life = 12000;
    if (!notification) {
      return this.add(severity, {detail: this.DEFAULT_DETAIL.ERROR}, param);
    } else {
      return this.add(severity, notification, param);
    }
  }

  notification(severity: string, notification: NotificationConfig, param?: string) {
    switch (severity) {
      case this.SEVERITY.ERROR :
        this.error(notification, param);
        break;
      case this.SEVERITY.WARN :
        this.warn(notification);
        break;
      case this.SEVERITY.INFO :
        this.info(notification);
        break;
      case this.SEVERITY.SUCCESS :
        this.success(notification);
        break;
      default :
        console.error(' Invalid notification type/severity : ' + severity);
    }
  }

  clearOnRouteChange() {
    // only keep messages that explicity have 'clearOnRouteChange' set to false.
    this.notifications = this.notifications.filter(message => {
      if (message.hasOwnProperty('clearOnRouteChange') && !(<UiNotificationMessage>message).clearOnRouteChange) {
        return message;
      }
    });
    this.notificationsSubject.next(this.notifications);
  }

  deleteMessage(message: Message) {
    // this condition is necessary otherwise this.notifications is always recreated when calling deleteMessage
    // event when there is not to delete which can cause visual glitch
    if (this.notifications.find(m => m === message)) {
      this.notifications = this.notifications.filter(m => m !== message);
      this.notificationsSubject.next(this.notifications);
    }
  }

  closeMessage() {
    this.notifications = [];
    this.notificationsSubject.next(this.notifications);
  }

  clearWarningMessages() {
    this.notifications = this.notifications.filter(n => n.severity !== 'warn');
    this.notificationsSubject.next(this.notifications);
  }

  removeErrorMessage(notification: NotificationConfig) {
    const message: UiNotificationMessage = this.createMessage(this.SEVERITY.ERROR, notification, '');
    if (this.notifications.find(m => m.detail === message.detail)) {
      this.notifications = this.notifications.filter(m => m.detail !== message.detail);
      this.notificationsSubject.next(this.notifications);
    }
  }
}
