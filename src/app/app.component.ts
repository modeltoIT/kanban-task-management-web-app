import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TuiRoot } from '@taiga-ui/core';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { AsideToggleService } from './shared/aside-toggle.service';
import { NgClass } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, AsideComponent, TuiRoot, NgClass],
})
export class AppComponent implements OnInit {
  asideToggleService = inject(AsideToggleService);
  destroyRef = inject(DestroyRef);

  isSideMenuOpen = this.asideToggleService.isOpen();

  ngOnInit() {
    this.asideToggleService.isAsideOpen$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(isOpen => {
        this.isSideMenuOpen = isOpen;
      });
  }

  closeSideMenu() {
    this.asideToggleService.toggle();
  }
}
