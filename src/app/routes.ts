import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from  "@angular/core";

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HerosComponent} from './components/heroes/heros.component';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HerosComponent,
      
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];


//export default routes;
export const routing: ModuleWithProviders = RouterModule.forRoot(routes)