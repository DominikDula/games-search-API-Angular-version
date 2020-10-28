import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { DevelopersComponent } from './views/developers/developers.component';
import { AllgamesComponent } from './views/allgames/allgames.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'developers', component: DevelopersComponent },
    { path: 'games', component: AllgamesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
