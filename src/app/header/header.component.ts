import { Component } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { TUI_ICONS } from '../shared/icons';

@Component({
  selector: 'app-header',
  imports: [TuiIcon],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  protected readonly TUI_ICONS = TUI_ICONS;
}
