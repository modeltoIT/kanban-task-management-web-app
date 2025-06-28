import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsideToggleService {
  private isAsideOpen = new BehaviorSubject(true);
  isAsideOpen$ = this.isAsideOpen.asObservable();

  constructor() {
    this.init();
  }

  init() {
    const stored = window.localStorage.getItem('isMenuOpen');

    if (stored !== null) this.isAsideOpen.next(stored === 'true');
  }

  isOpen() {
    return this.isAsideOpen.getValue();
  }

  open() {
    this.isAsideOpen.next(true);

    window.localStorage.setItem('isMenuOpen', 'true');
  }

  close() {
    this.isAsideOpen.next(false);

    window.localStorage.setItem('isMenuOpen', 'false');
  }
}
