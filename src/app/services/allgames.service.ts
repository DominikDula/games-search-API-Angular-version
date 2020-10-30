import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AllgamesService {
    @Output() allGames: EventEmitter<any> = new EventEmitter()
    private games : any = []

  constructor(private httpClient: HttpClient) { }


  getAllGame(page){
    this.httpClient.get(`https://rawg.io/api/games?&page=${page}`).subscribe(
        

        (data: any) => {
            
          this.games = data.results
          this.allGames.emit(this.games)
      },
      (error: any) => console.error(error),

    )
  }

  


}
