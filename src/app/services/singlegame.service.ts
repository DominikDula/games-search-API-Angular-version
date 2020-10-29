import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SinglegameService {

    @Output() singleGame: EventEmitter<any> = new EventEmitter()

  constructor(private httpClient: HttpClient) { }
  private results : any = []

  getSingleGame(slug : string) {

    this.httpClient.get(`https://rawg.io/api/games/${slug}`).subscribe(

        (data: any) => {
            this.results = data
            this.singleGame.emit(this.results)
        },
        (error: any) => console.error(error),
    )
   
}

}
