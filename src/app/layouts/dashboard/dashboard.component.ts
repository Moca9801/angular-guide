import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isDarkTheme: boolean = false;
  currentYear: number = new Date().getFullYear();
  buttons: any[] = [
    { label: 'One', route: '/dashboard' },
    { label: 'Two', route: '/dashboard/two' },
    { label: 'Three', route: '/dashboard/three' },
    { label: 'Salir', route: '/login' }
  ];
  
  constructor(
    private themeService: ThemeService,
    private router: Router

  ){}
  
  toggleTheme() {
    this.themeService.toggleTheme(); // Usar el servicio (si corresponde)
    this.isDarkTheme = !this.themeService.isDarkTheme
    document.body.classList.toggle('light-theme'); // O alternar la clase directamente
  }

  navigate(route: string){
    this.router.navigate([route]);
  }

}
