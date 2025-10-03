import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  isDarkTheme: boolean = false;
  currentYear: number = new Date().getFullYear();
  email: string = '';
  password: string = '';

  constructor(
    private themeService: ThemeService,
    private route: Router
  ){}
  
  toggleTheme() {
    this.themeService.toggleTheme(); // Usar el servicio (si corresponde)
    this.isDarkTheme = !this.themeService.isDarkTheme
    document.body.classList.toggle('light-theme'); // O alternar la clase directamente
  }

  login(){
    /*
    The objective is send a HTTP request and get a successfully response with a token, this token be used for authenticate all routes, in all HTTP request, this token will be part of authorization params.
    For this demo, the token is hardcoded, and the credentials too, if you put the correct credentials, you will get the token saved in localStorage.
    */
    if(this.password === '123456789' && this.email === 'test@email.com'){
      if(typeof localStorage !== 'undefined'){
        localStorage.removeItem("angular_guide_token");
        localStorage.setItem("angular_guide_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30")
      }
      alert('Login successful, token saved in localStorage');
      this.route.navigate(['/dashboard']);
      
    }else{
      alert('Wrong credentials');
    }
  }

  logout(){
    if(typeof localStorage !== 'undefined'){
      localStorage.removeItem("angular_guide_token");
    } 
    alert('Logout successful, token removed from localStorage');
  }
}
