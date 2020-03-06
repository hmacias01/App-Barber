import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { homedir } from 'os';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'list',
  //   loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  // },
   {
     path: 'home',
     loadChildren:"./home/home.module#HomePageModule"
  },
  {
    path:'list',
    loadChildren:"./list/list.module#ListPageModule"
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./registrer/registrer.module').then( m => m.RegistrerPageModule)
  },
  {
    path: 'barberias',
    loadChildren: () => import('./pages/barberias/barberias.module').then( m => m.BarberiasPageModule)
  },
  {
    path: 'cortes',
    loadChildren: () => import('./pages/cortes/cortes.module').then( m => m.CortesPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
