import {  Routes } from '@angular/router';
import { login } from './login/login';
import { Home } from './home/home';

export const routes: Routes = [
  {path:'',redirectTo:'/Login',pathMatch:"full"},
  {path:'Login',component:login},
  {path:'Home',component:Home},
  {path:'Login',component:login},
];