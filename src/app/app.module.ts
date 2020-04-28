import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BrowserModule, Title} from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClientXsrfModule,
  HttpXsrfTokenExtractor
} from '@angular/common/http';
// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// Cookie Consent
// core module
import {CoreModule} from './core/core.module';
// shared module
import {SharedModule} from './shared/shared.module';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ConsumersComponent} from "./components/consumers/consumers/consumers.component";
import {ProvidersComponent} from "./components/providers/providers/providers.component";
import {UsersListComponent} from "./components/users/users-list/users-list.component";
import {OrganisationsComponent} from "./components/organisations/organisations.component";
import {ConsultationComponent} from "./components/consultation/consultation/consultation.component";
import {ConfigurationComponent} from "./components/configuration/configuration/configuration.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  CardModule, CheckboxModule,
  DialogModule, InputSwitchModule,
  MessageService,
  PasswordModule,
  ToolbarModule,
  TreeDragDropService,
  TreeModule
} from "primeng";
import {MatSortModule} from "@angular/material/sort";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTreeModule} from "@angular/material/tree";
import {MatTabsModule} from "@angular/material/tabs";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgxCaptchaModule} from "ngx-captcha";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrganisationsComponent,
    UsersListComponent,
    ConsumersComponent,
    ProvidersComponent,
    ConsultationComponent,
    ConfigurationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule,
    CheckboxModule,
    InputSwitchModule,
    TreeModule,
    DialogModule,
    AppRoutingModule,
    PasswordModule,
    NgxCaptchaModule,
    ReactiveFormsModule,
    FormsModule,
    ToolbarModule,
    CardModule,
    CoreModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatTabsModule,
    MatTreeModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule
  ],
  providers: [
    MessageService,
    TreeDragDropService,
    Title,
    // {
    //     provide: RECAPTCHA_SETTINGS,
    //     useValue: {siteKey: '6LfEbIcUAAAAAHlJa4gu0ybpyEzpD1_RE0R97vOB'} as RecaptchaSettings
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './app/i18n/', '.json');
}
