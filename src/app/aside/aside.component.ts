import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MenuBoardsComponent } from './menu-boards/menu-boards.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { BtnBoardComponent } from '../shared/btn-board/btn-board.component';
import { AsideToggleService } from '../shared/aside-toggle.service';
import { NgClass } from '@angular/common';
import { AsideBtnOpenComponent } from '../aside-btn-open/aside-btn-open.component';

@Component({
  selector: 'app-aside',
  imports: [
    MenuBoardsComponent,
    ThemeToggleComponent,
    BtnBoardComponent,
    NgClass,
    AsideBtnOpenComponent,
  ],
  templateUrl: './aside.component.html',
})
export class AsideComponent implements OnInit {
  asideToggleService = inject(AsideToggleService);
  destroyRef = inject(DestroyRef);

  isAsideOpen = signal(this.asideToggleService.isOpen());

  ngOnInit() {
    const subscription = this.asideToggleService.isAsideOpen$.subscribe(isOpen => {
      this.isAsideOpen.set(isOpen);
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  toggleSideMenu() {
    this.asideToggleService.toggle();
  }
}
