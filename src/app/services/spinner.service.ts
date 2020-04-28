import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  private _visible = false;

  get visible(): boolean {
    return this._visible;
  }

  show() {
    this._visible = true;
  }

  hide() {
    this._visible = false;
  }
}
