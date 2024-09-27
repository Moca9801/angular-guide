import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkTheme = true;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
