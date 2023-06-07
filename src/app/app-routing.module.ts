import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAutobusesComponent } from './lista-autobuses/lista-autobuses.component';

const routes: Routes = [
  { path: 'lista-autobuses', component: ListaAutobusesComponent },
  { path: '', redirectTo: '/lista-autobuses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
