import { Routes } from '@angular/router';
import { ThemeColorComponent } from './pages/theme-color/theme-color.component';
import { TranslationComponent } from './pages/translation/translation.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
    { path: 'themeColor', component: ThemeColorComponent },
    { path: 'translation', component: TranslationComponent },
    { path: 'login', component: AuthComponent },
];