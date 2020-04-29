import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogYessNoComponent } from './dialog-yess-no.component';

describe('DialogYessNoComponent', () => {
  let component: DialogYessNoComponent;
  let fixture: ComponentFixture<DialogYessNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogYessNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogYessNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
