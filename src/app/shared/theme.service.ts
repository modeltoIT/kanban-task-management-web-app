import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeModeSubject = new BehaviorSubject<Theme>(Theme.Light);
  readonly themeMode = this.themeModeSubject.asObservable();

  constructor() {
    this.initTheme();

    this.themeModeSubject.pipe(distinctUntilChanged()).subscribe(theme => {
      document.body.classList.remove(Theme.Light, Theme.Dark);
      document.body.classList.add(theme);
    });
  }

  private initTheme() {
    const stored = window.localStorage.getItem('theme') as Theme | null;
    const hasStoredTheme = stored === Theme.Dark || stored === Theme.Light;

    const mode = hasStoredTheme
      ? stored
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? Theme.Dark
        : Theme.Light;

    window.localStorage.setItem('theme', mode);

    this.themeModeSubject.next(mode);
  }

  get isDarkMode() {
    return this.currentTheme === Theme.Dark;
  }

  get currentTheme() {
    return this.themeModeSubject.getValue();
  }

  setTheme(theme: Theme) {
    window.localStorage.setItem('theme', theme);

    this.themeModeSubject.next(theme);
  }
}
