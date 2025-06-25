import { Component, OnInit } from '@angular/core';
import { TuiSwitch } from '@taiga-ui/kit';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TUI_ICONS } from '../shared/icons';
import { BtnBoardComponent } from '../shared/btn-board/btn-board.component';
import { TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'app-theme-toggle',
  imports: [TuiSwitch, FormsModule, BtnBoardComponent, ReactiveFormsModule, TuiIcon],
  templateUrl: './theme-toggle.component.html',
  styleUrl: 'theme-toggle.component.scss',
})
export class ThemeToggleComponent implements OnInit {
  protected readonly TUI_ICONS = TUI_ICONS;
  btnThemeSwitch = new FormControl<boolean>(true);

  ngOnInit() {
    // this.btnThemeSwitch.valueChanges.subscribe(value => {});
  }
}
