import {  Routes } from '@angular/router';
import { login } from './login/login';
import { Home } from './home/home';
import { Quiz } from './quiz/quiz';

export const routes: Routes = [
  {path:'',redirectTo:'/Login',pathMatch:"full"},
  {path:'Login',component:login},
  {path:'home',component:Home},
  {path:'login',component:login},
  { path: 'quiz', component: Quiz },
];