import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SinglegameService {

    @Output() singleGame: EventEmitter<any> = new EventEmitter()
    @Output() screens: EventEmitter<any> = new EventEmitter()

  constructor(private httpClient: HttpClient) { }
  private results : any = []
  private screenshots : any = []

  getSingleGame(slug : string) {

    this.httpClient.get(`https://rawg.io/api/games/${slug}`).subscribe(

        (data: any) => {
            this.results = data
            this.singleGame.emit(this.results)
        },
        (error: any) => console.error(error),
    )
   
}

   GetGameScreenshots(slug) {

    this.httpClient.get(`https://rawg.io/api/games/${slug}/screenshots`).subscribe(
        (data: any) => {
            this.screenshots = data.results
            this.screens.emit(this.screenshots)
        },
        (error: any) => console.error(error),

    )
            
        
    }

}
