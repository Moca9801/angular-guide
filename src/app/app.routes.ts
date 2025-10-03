import { Routes } from '@angular/router';
import { ThemeColorComponent } from './pages/theme-color/theme-color.component';
import { TranslationComponent } from './pages/translation/translation.component';
import { AuthComponent } from './pages/auth/auth.component';
import { OneComponent } from './pages/dashboard/one/one.component';
import { TwoComponent } from './pages/dashboard/two/two.component';
import { ThreeComponent } from './pages/dashboard/three/three.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: 'themeColor', component: ThemeColorComponent },
    { path: 'translation', component: TranslationComponent },
    { path: 'login', component: AuthComponent },
    { 
        path: 'dashboard', 
        component: DashboardComponent, 
        children: [  
            { path: '', component: OneComponent },
            { path: 'two', component: TwoComponent },
            { path: 'three', component: ThreeComponent },
        ] 
    },
    { path: '**', component: NotFoundComponent },


];