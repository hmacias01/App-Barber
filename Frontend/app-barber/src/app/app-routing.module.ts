import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
    path: 'home/barberias/:id',
    loadChildren: () => import('./pages/barberias/barberias.module').then( m => m.BarberiasPageModule)
  },
  {
    path: 'home/cortes',
    loadChildren: () => import('./pages/cortes/cortes.module').then( m => m.CortesPageModule)
  },
  {
    path: 'home/barberias/:id/reservarcita',
    loadChildren: () => import('./pages/reservarcita/reservarcita.module').then( m => m.ReservarcitaPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
