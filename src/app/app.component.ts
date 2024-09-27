import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeColorComponent } from "./pages/theme-color/theme-color.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeColorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-guide';
}
