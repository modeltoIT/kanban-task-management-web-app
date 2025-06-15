import { Component, Inject, input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TuiIcon, TuiRoot } from '@taiga-ui/core';
import { AsideComponent } from './aside/aside.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, AsideComponent],
})
export class AppComponent {
  isSideBarOpen = input(true);
}
