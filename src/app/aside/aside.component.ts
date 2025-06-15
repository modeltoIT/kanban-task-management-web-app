import { Component } from '@angular/core';
import { MenuBoardsComponent } from './menu-boards/menu-boards.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-aside',
  imports: [MenuBoardsComponent, ThemeToggleComponent],
  templateUrl: './aside.component.html',
})
export class AsideComponent {}
