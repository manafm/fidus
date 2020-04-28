import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  translate: TranslateService;
  constructor(private translateService: TranslateService) {
    this.translate = translateService;
  }

  ngOnInit() {
  }

}
