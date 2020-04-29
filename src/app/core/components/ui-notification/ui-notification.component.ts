import { Component, OnInit } from '@angular/core';
import { UiNotificationService } from '../../services/ui-notification.service';
import { Router } from '@angular/router';
import {Message} from "primeng/api";

@Component({
  selector: 'app-ui-notification',
  templateUrl: './ui-notification.component.html',
  styleUrls: ['./ui-notification.component.css']
})
export class UiNotificationComponent implements OnInit {

  notifications: Message[] = [];

  constructor(private uiNotificationService: UiNotificationService, private router: Router) { }

  ngOnInit() {
    this.uiNotificationService.notification$.subscribe(data => {
      this.notifications = data;
    });
  }

  deleteMessage(message: Message) {
    this.uiNotificationService.deleteMessage(message);
  }

}
