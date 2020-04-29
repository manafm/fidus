import {filter} from 'rxjs/operators';
import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {Router, NavigationEnd, NavigationStart} from '@angular/router';
import {
  NgcCookieConsentService,
  NgcInitializeEvent,
  NgcNoCookieLawEvent,
  NgcStatusChangeEvent
} from 'ngx-cookieconsent';
import {Subscription, Observable} from 'rxjs';
import {Location, PopStateEvent} from '@angular/common';

// services
import {UiNotificationService} from './core/services/ui-notification.service';

import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TranslateService]
})
export class AppComponent implements OnInit, OnDestroy {
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  canActivateProtectedRoutes: Observable<boolean>;

  // CookieConsent
  // keep refs to subscriptions to be able to unsubscribe later

  private popupOpenSubscription: Subscription;
  private popupCloseSubscription: Subscription;
  private initializeSubscription: Subscription;
  private statusChangeSubscription: Subscription;
  private revokeChoiceSubscription: Subscription;
  private noCookieLawSubscription: Subscription;
  public isUserLogged: boolean;


  constructor(private translateService: TranslateService,
              private router: Router,
              private uiNotificationService: UiNotificationService,
              public location: Location) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('fr');
    const browserLang = this.translateService.getBrowserLang();
    console.log('Current Language : ', this.translateService.currentLang);
  }

  ngOnInit() {

    const container = document.querySelector('#iwanttoscroll');
    const ps = new PerfectScrollbar('#iwanttoscroll', {
      scrollXMarginOffset: 4000,
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });


    const elemMainPanel = <HTMLElement>document.querySelector('.main-actions');
    const elemSidebar = <HTMLElement>document.querySelector('app-sidebar');

    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if (event.url !== this.lastPoppedUrl) {
          this.yScrollStack.push(window.scrollY);
        }
      } else if (event instanceof NavigationEnd) {
        if (event.url === this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else {
          window.scrollTo(0, 0);
        }
      }
    });
    this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      elemMainPanel.scrollTop = 0;
      elemSidebar.scrollTop = 0;
    });
    console.log('Application component initialized ...');
  }

  ngOnDestroy() {
  }

  // handleLanguageChange(code: string) {
  //     console.log('Language changed to : ', code);
  //     this.translateService.use(code);
  // }

  onRouteChange() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
