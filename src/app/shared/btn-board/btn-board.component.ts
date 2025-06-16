import { Component, input } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { NgClass, NgStyle } from '@angular/common';
import { TUI_ICONS } from '../icons';

@Component({
  selector: 'app-btn-board',
  templateUrl: './btn-board.component.html',
  imports: [TuiIcon, NgClass],
})
export class BtnBoardComponent {
  protected readonly TUI_ICONS = TUI_ICONS;
  btnTitle = input.required<string>();
  isActive = input<boolean>(false);
  isActionBtn = input<boolean>(false);
  isHideBtn = input<boolean>(false);

  get linkClass() {
    return {
      'pl-8': !this.isHideBtn(),
      'px-2': this.isHideBtn(),
      'rounded-r-[100px]': !this.isHideBtn(),
      'rounded-[100px]': this.isHideBtn(),
      'bg-purple': this.isActive(),
      'text-white': this.isActive(),
      'text-grey-m': this.isHideBtn() || (!this.isActive() && !this.isActionBtn()),
      'text-purple': this.isActionBtn() && !this.isHideBtn(),
      'hover:bg-purple-hover': !this.isActive() && !this.isActionBtn(),
      'hover:bg-purple-hover/35': !this.isActive() && !this.isActionBtn(),
      'hover:text-white': !this.isActionBtn(),
      'hover:text-purple-hover': this.isActionBtn(),
    };
  }
}
