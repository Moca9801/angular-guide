import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './translation.component.html',
  styleUrl: './translation.component.scss'
})
export class TranslationComponent {
  isDarkTheme: boolean = false;
  currentYear: number = new Date().getFullYear();
  currentLang = 'en';


  constructor(private themeService: ThemeService, private translate: TranslateService){
    this.translate.setDefaultLang('en');
  }
  
  toggleTheme() {
    this.themeService.toggleTheme(); // Usar el servicio (si corresponde)
    this.isDarkTheme = !this.themeService.isDarkTheme
    document.body.classList.toggle('light-theme'); // O alternar la clase directamente
  }

  toggleLanguage(){
    this.currentLang = this.currentLang === 'en' ? 'es' : 'en';
    this.translate.use(this.currentLang);
  }
}
