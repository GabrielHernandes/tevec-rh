import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtmComponent } from './atm.component';


const routes: Routes = [
  { path: '', component: AtmComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtmRoutingModule { }
