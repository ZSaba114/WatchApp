import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import {ContactComponent } from './pages/contact/contact.component';
import {SignupComponent } from './pages/signup/signup.component';
import {WelcomeComponent } from './pages/welcome/welcome.component';


export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
   
  },
  {
    path: 'login',
    component: LoginComponent,
  
  },
  {
    path: 'home',
    component: HomeComponent,
  
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'show-movie/:movieId',
    component: ShowMovieComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  
  },
  {
    path: 'contact',
    component: ContactComponent,
   
  },
];
