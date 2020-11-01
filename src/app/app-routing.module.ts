import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { DevelopersComponent } from './views/developers/developers.component';
import { AllgamesComponent } from './views/allgames/allgames.component';
import { SinglegameComponent } from './views/singlegame/singlegame.component';
import { SingledeveloperComponent } from './views/singledeveloper/singledeveloper.component';
import { GenresComponent } from './views/genres/genres.component';
import { SinglegenreComponent } from './views/singlegenre/singlegenre.component';
import { TagsComponent } from './views/tags/tags.component';
import { SingletagComponent } from './views/singletag/singletag.component';
import { PlatformsComponent } from './views/platforms/platforms.component';
import { SingleplatformComponent } from './views/singleplatform/singleplatform.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'developers', component: DevelopersComponent },
    { path: 'developers/:slug', component: SingledeveloperComponent },
    { path: 'games', component: AllgamesComponent },
    { path: 'games/:slug', component: SinglegameComponent },
    { path: 'genres', component: GenresComponent },
    { path: 'genres/:slug', component: SinglegenreComponent },
    { path: 'tags', component: TagsComponent },
    { path: 'tags/:slug', component: SingletagComponent },
    { path: 'platforms', component: PlatformsComponent },
    { path: 'platforms/:slug', component: SingleplatformComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
