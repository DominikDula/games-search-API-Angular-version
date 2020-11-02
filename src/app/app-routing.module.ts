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
import { GlobalsearchComponent } from './views/globalsearch/globalsearch.component';


const routes: Routes = [
    { path: '', component: HomeComponent , data: {animation: 'Home'} },
    { path: 'developers', component: DevelopersComponent , data: {animation: 'Developers'} },
    { path: 'developers/:slug', component: SingledeveloperComponent , data: {animation: 'Developer'} },
    { path: 'games', component: AllgamesComponent , data: {animation: 'Games'} },
    { path: 'games/:slug', component: SinglegameComponent , data: {animation: 'Game'} },
    { path: 'genres', component: GenresComponent , data: {animation: 'Genres'} },
    { path: 'genres/:slug', component: SinglegenreComponent , data: {animation: 'Genre'} },
    { path: 'tags', component: TagsComponent , data: {animation: 'Tags'} },
    { path: 'tags/:slug', component: SingletagComponent , data: {animation: 'Tag'} },
    { path: 'platforms', component: PlatformsComponent , data: {animation: 'Platforms'} },
    { path: 'platforms/:slug', component: SingleplatformComponent , data: {animation: 'Platform'} },
    { path: 'search/:query', component: GlobalsearchComponent , data: {animation: 'Search'} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
