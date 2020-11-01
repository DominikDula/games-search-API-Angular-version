import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//views
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
//components
import { TheNavigationComponent } from '@app/components/the-navigation/the-navigation.component';
import { SearchGamesComponent } from './components/game/search-games/search-games.component';
import { GameInfoComponent } from './components/game/game-info/game-info.component';
import { TemplateListComponent } from './components/template-list/template-list.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { TheFooterComponent } from './components/the-footer/the-footer.component';
import { SingletemplateComponent } from './components/genres-platforms/singletemplate/singletemplate.component';
import { GamescreenshotsComponent } from './components/game/gamescreenshots/gamescreenshots.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevelopersComponent,
    AllgamesComponent,
    TheNavigationComponent,
    SearchGamesComponent,
    GameInfoComponent,
    TemplateListComponent,
    SinglegameComponent,
    SingledeveloperComponent,
    LoadMoreComponent,
    TheFooterComponent,
    GenresComponent,
    SinglegenreComponent,
    SingletemplateComponent,
    GamescreenshotsComponent,
    TagsComponent,
    SingletagComponent,
    PlatformsComponent,
    SingleplatformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
