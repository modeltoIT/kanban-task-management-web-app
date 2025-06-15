import { Component, input } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { NgClass } from '@angular/common';
import { TUI_ICONS } from '../icons';

@Component({
  selector: 'app-btn-board',
  templateUrl: './btn-board.component.html',
  imports: [TuiIcon, NgClass],
})
export class BtnBoardComponent {
  protected readonly TUI_ICONS = TUI_ICONS;
  btnTitle = input.required<string>();
  isActive = input.required<boolean>();
  isActionBtn = input<boolean>(false);

  get linkClass() {
    const active = this.isActive();
    const action = this.isActionBtn();


    return {
      'bg-purple': active,
      'hover:bg-purple-hover': !active && !action,
      'hover:bg-purple-hover/35': !active && !action,
      'hover:text-white': !action,
      'hover:text-purple-hover': action,
      'text-white': active,
      'text-grey-m': !active && !action,
      'text-purple': action,
    }
  }
}
