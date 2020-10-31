import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//views
import { HomeComponent } from './views/home/home.component';
import { DevelopersComponent } from './views/developers/developers.component';
import { AllgamesComponent } from './views/allgames/allgames.component';
import { SinglegameComponent } from './views/singlegame/singlegame.component';
import { SingledeveloperComponent } from './views/singledeveloper/singledeveloper.component';
import { GenresComponent } from './views/genres/genres.component';
import { SinglegenreComponent } from './views/singlegenre/singlegenre.component';
//components
import { TheNavigationComponent } from '@app/components/the-navigation/the-navigation.component';
import { SearchGamesComponent } from './components/game/search-games/search-games.component';
import { GameInfoComponent } from './components/game/game-info/game-info.component';
import { TemplateListComponent } from './components/template-list/template-list.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { TheFooterComponent } from './components/the-footer/the-footer.component';
import { SingletemplateComponent } from './components/genres-platforms/singletemplate/singletemplate.component';





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
    SingletemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
