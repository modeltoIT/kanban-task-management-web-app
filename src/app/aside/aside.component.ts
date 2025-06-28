import { Component } from '@angular/core';
import { MenuBoardsComponent } from './menu-boards/menu-boards.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { BtnBoardComponent } from '../shared/btn-board/btn-board.component';

@Component({
  selector: 'app-aside',
  imports: [MenuBoardsComponent, ThemeToggleComponent, BtnBoardComponent],
  templateUrl: './aside.component.html',
})
export class AsideComponent {}
