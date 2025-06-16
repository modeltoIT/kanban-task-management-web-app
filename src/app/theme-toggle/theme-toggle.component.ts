import { Component } from '@angular/core';
import { TuiSwitch } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { TuiIcon } from '@taiga-ui/core';
import { TUI_ICONS } from '../shared/icons';
import { BtnBoardComponent } from '../shared/btn-board/btn-board.component';

@Component({
  selector: 'app-theme-toggle',
  imports: [TuiSwitch, FormsModule, TuiIcon, BtnBoardComponent],
  templateUrl: './theme-toggle.component.html',
  styleUrl: 'theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  protected readonly TUI_ICONS = TUI_ICONS;
}
