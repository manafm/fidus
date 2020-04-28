import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelloworldService } from 'src/app/services/helloworld/helloworld.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

  helloSub: Subscription;

  title = 'Projet Fidus ';

  persons = [];

  person: Person;

  constructor(private hello: HelloworldService) {
  }

  ngOnDestroy() {
    this.helloSub.unsubscribe();
  }

  ngOnInit() {
    this.helloSub = this.hello.getPerson().subscribe(
      data => this.person = data,
      error => console.error('err---', error)
    );
  }
}
