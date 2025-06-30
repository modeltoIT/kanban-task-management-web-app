import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { TUI_ICONS } from '../shared/icons';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { ThemeService } from '../shared/theme.service';
import { AsideToggleService } from '../shared/aside-toggle.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  imports: [TuiIcon, NgOptimizedImage, NgClass],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  asideToggleService = inject(AsideToggleService);
  themeService = inject(ThemeService);
  destroyRef = inject(DestroyRef);

  theme = this.themeService.currentTheme;
  isSideMenuOpen = this.asideToggleService.isOpen();

  protected readonly TUI_ICONS = TUI_ICONS;

  ngOnInit() {
    this.themeService.themeMode.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(theme => {
      this.theme = theme;
    });

    this.asideToggleService.isAsideOpen$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(isOpen => {
        this.isSideMenuOpen = isOpen;
      });
  }

  openSideMenu() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768) return;

    this.asideToggleService.toggle();
  }
}
