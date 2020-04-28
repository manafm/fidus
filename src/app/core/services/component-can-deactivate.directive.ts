import { HostListener, Injectable, Directive } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CanDeactivate} from '@angular/router';

@Directive()
export abstract class ComponentCanDeactivateDirective {

  abstract canDeactivate(): boolean;


  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (!this.canDeactivate()) {
      $event.returnValue = true;
    }
  }
}

export abstract class FormCanDeactivate extends ComponentCanDeactivateDirective {

  abstract get form(): NgForm;

  canDeactivate(): boolean {
    return this.form.submitted || !this.form.dirty;
  }
}


@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ComponentCanDeactivateDirective> {
  canDeactivate(component: ComponentCanDeactivateDirective): boolean {

    if (!component.canDeactivate()) {
      if (confirm('You have unsaved changes! If you leave, your changes will be lost.')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
// new-user/4e2c4218-bd93-4ee5-b382-17143bf558f2
