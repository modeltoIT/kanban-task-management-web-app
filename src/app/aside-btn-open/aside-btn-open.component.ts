import { Component, input, output } from '@angular/core';
import { TUI_ICONS } from '../shared/icons';
import { TuiIcon } from '@taiga-ui/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-aside-btn-open',
  imports: [TuiIcon, NgClass],
  templateUrl: './aside-btn-open.component.html',
})
export class AsideBtnOpenComponent {
  isAsideOpen = input.required<boolean>();

  openAside = output({ alias: 'open' });

  readonly TUI_ICONS = TUI_ICONS;

  openSideMenu() {
    this.openAside.emit();
  }
}
