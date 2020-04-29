import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {TranslateService} from '@ngx-translate/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


export interface DialogData {
  title: string;
  message: string;
}
@Component({
  selector: 'app-dialog-yess-no',
  templateUrl: './dialog-yess-no.component.html',
  styleUrls: ['./dialog-yess-no.component.scss']
})
export class DialogYessNoComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private translateService: TranslateService,
    public dialogRef: MatDialogRef<DialogYessNoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
      this.dialogRef._containerInstance._config.maxWidth = 120;
  }

}
