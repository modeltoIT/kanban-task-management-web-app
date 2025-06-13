import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TuiIcon } from '@taiga-ui/core';
import { TUI_ICONS } from '../../shared/icons';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, TuiIcon],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  protected readonly TUI_ICONS = TUI_ICONS;
}
