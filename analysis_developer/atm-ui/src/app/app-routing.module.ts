import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/atm',
    pathMatch: 'full'
  },
  {
    path: 'atm',
    loadChildren: () => import('./atm/atm.module').then(m => m.AtmModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
