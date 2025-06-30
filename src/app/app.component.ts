import { Component, input } from '@angular/core';
import { TuiRoot } from '@taiga-ui/core';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, AsideComponent, TuiRoot],
})
export class AppComponent {
  isSideBarOpen = input(true);
}
