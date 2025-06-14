import { Component } from '@angular/core';
import { BtnBoardComponent } from '../../shared/btn-board/btn-board.component';

@Component({
  selector: 'app-menu-boards',
  imports: [BtnBoardComponent],
  templateUrl: './menu-boards.component.html',
})
export class MenuBoardsComponent {
  bordersCount = 8;
}
