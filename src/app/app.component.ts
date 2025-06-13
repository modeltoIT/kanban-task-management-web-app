import { Component, Inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TuiIcon, TuiRoot } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent],
})
export class AppComponent {}
