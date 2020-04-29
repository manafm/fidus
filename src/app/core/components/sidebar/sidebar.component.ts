import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import {UiNotificationService} from '../../services/ui-notification.service';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {Location} from '@angular/common';
import {SpinnerService} from "../../../services/spinner.service";

declare const $: any;

export declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES_PROFILE: RouteInfo[] = [
  {path: 'myprofile/dashboard', title: 'header.myDashboard', icon: 'fas fa-home', class: 'mdl-navigation__link'},
  {
    path: 'myprofile/update',
    title: 'access.demand.details.myprofile.update',
    icon: 'fas fa-user-edit',
    class: 'mdl-navigation__link'
  },
  {
    path: 'myprofile/access-demand', title: 'access.demand.details.myprofile.create.ad',
    icon: 'far fa-question-circle', class: 'mdl-navigation__link'
  },
  {
    path: 'myprofile/all-access-demands', title: 'access.demand.details.myprofile.my.ad',
    icon: 'fa fa-tasks', class: 'mdl-navigation__link'
  }
];

export const ROUTES_PROFILE_WITHOUT_ACCOUNT: RouteInfo[] = [
  {
    path: 'myprofile/update',
    title: 'access.demand.details.myprofile.update',
    icon: 'fas fa-user-edit',
    class: 'mdl-navigation__link'
  },
];

export const ROUTES: RouteInfo[] = [
  {path: 'dashboard', title: 'sidebar.dashboard', icon: 'fas fa-home', class: 'mdl-navigation__link'},
  {path: 'dashboard', title: 'sidebar.consultation', icon: 'fas fa-users-cog', class: 'mdl-navigation__link'},
  {path: 'role-management', title: 'sidebar.configuration', icon: 'fas fa-user-tag', class: 'mdl-navigation__link'},
  {path: 'resource-management', title: 'sidebar.services', icon: 'fas fa-desktop', class: 'mdl-navigation__link'},
  {path: 'organisations', title: 'sidebar.organisation', icon: 'fas fa-desktop', class: 'mdl-navigation__link'}, // ici
  {path: 'resource-management', title: 'sidebar.consumer', icon: 'fas fa-desktop', class: 'mdl-navigation__link'}

];

export const ROUTE_BE_ADMIN: RouteInfo[] = [
  {
    path: 'stored-event-management/stored-event-list',
    title: 'sidebar.eventstore',
    icon: 'fas fa-user-secret',
    class: 'mdl-navigation__link'
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  location: Location;
  // @Output() languageChanged = new EventEmitter();
  public isLoggedIn = false;

  isMyProfile = false;

  constructor(location: Location, private router: Router,
              private uiNotificationService: UiNotificationService,
              public translateService: TranslateService,
              private spinnerService: SpinnerService) {
    this.location = location;
  }

  ngOnInit() {
    this.spinnerService.show();
    this.uiNotificationService.updateMenuItems(ROUTES);

    this.uiNotificationService.menuItems$.subscribe(data => {
      this.menuItems = data;
    });
    this.spinnerService.hide();
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  changePreferredLanguage(code: string) {
    // this.languageService.getLanguage(code).then(lang => this.currentLanguage = lang);
    this.translateService.use(code);
    localStorage.setItem('lang', code);
  }

  updateMyProfilePage() {
    // this.router.navigate(['/myprofile/update']);
  }
}
