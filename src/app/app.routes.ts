import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registration } from './registration/registration';
import { Main } from './main/main';
import { Statistik } from './statistik/statistik';
import { Home } from './home/home';

export const routes: Routes = [
    {path: 'login', title:'Login', component: Login},
    {path: 'registration', title:'Registration', component: Registration},
    {path: '', component: Main, children: [
        {path:'home', component: Home},
        {path:'statistik', component: Statistik},
    ]},
];
