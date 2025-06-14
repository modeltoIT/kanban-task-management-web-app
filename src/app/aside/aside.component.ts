import { Component, input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { MenuBoardsComponent } from './menu-boards/menu-boards.component';

@Component({
  selector: 'app-aside',
  imports: [NgOptimizedImage, MenuBoardsComponent],
  templateUrl: './aside.component.html',
})
export class AsideComponent {
  isSideBarOpen = input(true);
}
