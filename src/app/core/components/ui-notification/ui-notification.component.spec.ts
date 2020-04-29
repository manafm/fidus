import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNotificationComponent } from './ui-notification.component';

describe('UiNotificationComponent', () => {
  let component: UiNotificationComponent;
  let fixture: ComponentFixture<UiNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
