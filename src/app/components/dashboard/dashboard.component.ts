import { Component, OnInit } from '@angular/core';
import { FidusService } from '../../fidus.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  consumers = [];

  constructor(private fidus: FidusService) {
  }

  ngOnInit(): void {

    console.log('Bienvenue au Dashboard!');
    // this.fidus.fetchConsumers().subscribe(
    //   consumersFromDB => this.consumers = consumersFromDB
    // );
  }
}
