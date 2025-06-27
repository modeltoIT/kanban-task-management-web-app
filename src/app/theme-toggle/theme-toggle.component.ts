import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TuiSwitch } from '@taiga-ui/kit';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TUI_ICONS } from '../shared/icons';
import { BtnBoardComponent } from '../shared/btn-board/btn-board.component';
import { TuiIcon } from '@taiga-ui/core';
import { Theme, ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [TuiSwitch, FormsModule, BtnBoardComponent, ReactiveFormsModule, TuiIcon],
  templateUrl: './theme-toggle.component.html',
  styleUrl: 'theme-toggle.component.scss',
})
export class ThemeToggleComponent implements OnInit {
  protected readonly TUI_ICONS = TUI_ICONS;

  themeService = inject(ThemeService);
  btnThemeSwitch = new FormControl<boolean>(this.themeService.isDarkMode);

  destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscription = this.btnThemeSwitch.valueChanges.subscribe(value => {
      this.themeService.setTheme(value ? Theme.Dark : Theme.Light);
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
