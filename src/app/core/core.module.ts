import { NgModule, Optional , SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UiNotificationComponent } from './components/ui-notification/ui-notification.component';

import { ActivatedRouteStubService } from './services/activated-route-stub.service';
import { HttpErrorHandlerService } from './services/http-error-handler.service';
import { UiNotificationService } from './services/ui-notification.service';

import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import {CanDeactivateGuard} from './services/component-can-deactivate.directive';
import {ToastModule} from "primeng";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatIconModule,
    MatBadgeModule,
    ToastModule,
    SharedModule,
  ],
  providers : [
    HttpErrorHandlerService,
    ActivatedRouteStubService,
    UiNotificationService,
    CanDeactivateGuard
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
    UiNotificationComponent
  ],
  exports : [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    UiNotificationComponent
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
 }
