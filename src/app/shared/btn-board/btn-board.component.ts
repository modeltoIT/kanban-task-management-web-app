import { Component, input } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { TUI_ICONS } from '../icons';

@Component({
  selector: 'app-btn-board',
  templateUrl: './btn-board.component.html',
  imports: [TuiIcon],
})
export class BtnBoardComponent {
  btnTitle = input.required<string>();
  protected readonly TUI_ICONS = TUI_ICONS;
}
