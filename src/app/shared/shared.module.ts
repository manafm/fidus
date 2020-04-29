// angular imports
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
// primeng imports
import {TableModule} from 'primeng/table';

// ngx imports
import {NgxPaginationModule} from 'ngx-pagination';
// our imports
import {SharedDomainModule} from './shared-domain/shared-domain.module';
// Components
import {SpinnerComponent} from './components/spinner/spinner.component';
// services
// Directives
import {DataViewModule} from 'primeng/dataview';
import {DialogYessNoComponent} from './components/dialog/dialog-yess-no/dialog-yess-no.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {DropdownModule} from "primeng/dropdown";

import {
  AccordionModule,
  AutoCompleteModule,
  ButtonModule, CheckboxModule,
  ConfirmationService,
  ConfirmDialogModule,
  DialogModule,
  FieldsetModule, InputMaskModule,
  InputTextareaModule,
  InputTextModule,
  KeyFilterModule,
  ListboxModule,
  MessageModule,
  MessagesModule,
  MultiSelectModule,
  OrderListModule,
  PanelModule,
  PickListModule, RadioButtonModule,
  SelectButtonModule,
  SpinnerModule,
  TabViewModule, TooltipModule, TreeTableModule,
  TriStateCheckboxModule
} from "primeng";
import {MatSortModule} from "@angular/material/sort";
import {SpinnerService} from "../services/spinner.service";
import {ErrorMessageService} from "../services/error-message.service";


@NgModule({
    imports: [
        TranslateModule,
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        AutoCompleteModule,
        TriStateCheckboxModule,
        MultiSelectModule,
        SpinnerModule,
        InputTextModule,
        InputTextareaModule,
        InputMaskModule,
        MessageModule,
        MessagesModule,
        KeyFilterModule,
        AccordionModule,
        RadioButtonModule,
        ButtonModule,
        TabViewModule,
        TooltipModule,
        PickListModule,
        ConfirmDialogModule,
        PanelModule,
        FieldsetModule,
        DropdownModule,
        SelectButtonModule,
        TreeTableModule,
        NgxPaginationModule,
        SharedDomainModule,
        CheckboxModule,
        DialogModule,
        DataViewModule,
        FileUploadModule,
        OrderListModule,
        ListboxModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        MatSortModule,
    ],
  declarations: [
    SpinnerComponent,
    DialogYessNoComponent,
  ],
  providers: [
    SpinnerService,
    ErrorMessageService,
    ConfirmationService,
  ],
  exports: [
    TranslateModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    AutoCompleteModule,
    TriStateCheckboxModule,
    MultiSelectModule,
    SpinnerModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule,
    MessageModule,
    MessagesModule,
    KeyFilterModule,
    AccordionModule,
    RadioButtonModule,
    ButtonModule,
    TabViewModule,
    TooltipModule,
    PickListModule,
    ConfirmDialogModule,
    PanelModule,
    FieldsetModule,
    DropdownModule,
    SelectButtonModule,
    TreeTableModule,
    NgxPaginationModule,
    SharedDomainModule,
    SpinnerComponent,
    DataViewModule,
    FileUploadModule,
    OrderListModule,
    ListboxModule,
    DialogYessNoComponent
  ],
  entryComponents: [
    DialogYessNoComponent,
  ]
})
export class SharedModule {

}
