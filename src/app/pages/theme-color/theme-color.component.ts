import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-color',
  standalone: true,
  imports: [],
  templateUrl: './theme-color.component.html',
  styleUrl: './theme-color.component.scss'
})
export class ThemeColorComponent {
  isDarkTheme: boolean = false;
  currentYear: number = new Date().getFullYear();


  constructor(private themeService: ThemeService){}

  toggleTheme() {
    this.themeService.toggleTheme(); // Usar el servicio (si corresponde)
    this.isDarkTheme = !this.themeService.isDarkTheme
    document.body.classList.toggle('light-theme'); // O alternar la clase directamente
  }

}
