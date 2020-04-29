import { Component, Input } from '@angular/core';
import {SpinnerService} from "../../../services/spinner.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  @Input()
  visible = false;

  constructor(private spinnerService: SpinnerService) { }

  get isVisible() {
    return this.visible || this.spinnerService.visible;
  }

}
