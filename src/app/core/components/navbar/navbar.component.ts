import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {UiNotificationService} from '../../services/ui-notification.service';
import {SpinnerService} from "../../../services/spinner.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  // fields from the template
  private listTitles: any[];
  location: Location;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;
  private $layer: any;
  isMyProfile = false;
  notificationMessage = '';
  isDataMissingData = false;
  isCitizen = false;
  accessDemandsToProcessCount = 0;
  myAccessDemandsCount = 0;

  // @Output() languageChanged = new EventEmitter();
  public isLoggedIn = false;

  constructor(location: Location, private element: ElementRef, private router: Router,
              public translateService: TranslateService,
              private uiNotificationService: UiNotificationService,
              private spinnerService: SpinnerService) {
    this.location = location;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this.router.events.subscribe((event) => {
      // this.sidebarClose();
      this.$layer = document.getElementsByClassName('close-layer')[0];
      if (this.$layer) {
        this.$layer.remove();
        this.mobile_menu_visible = 0;
      }
    });

  }

  ngAfterViewInit(): void {
  }

  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(2);
    }
    titlee = titlee.split('/').pop();

    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  changePreferredLanguage(code: string) {
    // this.languageService.getLanguage(code).then(lang => this.currentLanguage = lang);
    this.translateService.use(code);
    localStorage.setItem('lang', code);
  }

  // myProfile() {
  //   this.router.navigate(['/myprofile/dashboard']);
  // }
  //
  // accessDemands() {
  //   this.router.navigate(['/access-demand']);
  // }
  //
  // dashboard() {
  //   this.router.navigate(['/dashboard']);
  //   this.isMyProfile = false;
  //   this.uiNotificationService.updateMenuItems(ROUTES);
  // }
  //
  // showMyProfile() {
  //   this.router.navigate(['/myprofile/update']);
  //   this.isMyProfile = true;
  //   this.uiNotificationService.updateMenuItems(ROUTES_PROFILE);
  // }
  //
  // allAccessDemandsPage() {
  //   this.router.navigate(['/myprofile/all-access-demands']);
  // }
  //
  // updateMyProfilePage() {
  //   this.router.navigate(['/myprofile/update']);
  // }
}
