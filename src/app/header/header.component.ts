import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { TUI_ICONS } from '../shared/icons';
import { NgOptimizedImage } from '@angular/common';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-header',
  imports: [TuiIcon, NgOptimizedImage],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  protected readonly TUI_ICONS = TUI_ICONS;

  themeService = inject(ThemeService);
  theme = this.themeService.currentTheme;

  destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscription = this.themeService.themeMode.subscribe(theme => {
      this.theme = theme;
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
