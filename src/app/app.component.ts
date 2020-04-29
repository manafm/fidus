import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HelloworldService } from './services/helloworld/helloworld.service';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  helloSub: Subscription;

  title = 'Projet Fidus ';

  persons = [];

  constructor(private hello: HelloworldService) {
  }

  ngOnDestroy() {
    this.helloSub.unsubscribe();
  }

  ngOnInit() {
    this.helloSub = this.hello.listUsers().subscribe(
      data => this.persons = data,
      error => console.error('err---', error)
    );
  }
}
