import { Component, input, output } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { NgClass } from '@angular/common';
import { TUI_ICONS } from '../icons';

@Component({
  selector: 'app-btn-board',
  templateUrl: './btn-board.component.html',
  imports: [TuiIcon, NgClass],
})
export class BtnBoardComponent {
  hideAside = output<void>({ alias: 'close' });

  btnTitle = input.required<string>();
  isActive = input<boolean>(false);
  isActionBtn = input<boolean>(false);
  isHideBtn = input<boolean>(false);

  readonly TUI_ICONS = TUI_ICONS;

  get linkClass() {
    return {
      'laptop:pl-8': !this.isHideBtn(),
      'pl-4': !this.isHideBtn(),
      'tablet:pl-6': !this.isHideBtn(),
      'laptop:px-2': this.isHideBtn(),
      'px-1': this.isHideBtn(),
      'tablet:px-3': this.isHideBtn(),
      'rounded-r-[100px]': !this.isHideBtn(),
      'rounded-[100px]': this.isHideBtn(),
      'bg-purple': this.isActive(),
      'text-white': this.isActive(),
      'text-grey-m': this.isHideBtn() || (!this.isActive() && !this.isActionBtn()),
      'text-purple': this.isActionBtn() && !this.isHideBtn(),
      'hover:bg-purple-hover': !this.isActive() && !this.isActionBtn(),
      'hover:text-white': !this.isActionBtn(),
      'hover:text-purple-2': this.isActionBtn(),
    };
  }

  onClick() {
    if (this.isHideBtn()) this.onHideAside();
  }

  private onHideAside() {
    this.hideAside.emit();
  }
}
