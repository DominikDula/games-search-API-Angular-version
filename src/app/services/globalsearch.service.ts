import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GlobalgamesService {
    @Output() allGames: EventEmitter<any> = new EventEmitter()
    private games : any = []

  constructor(private httpClient: HttpClient) { }


  getAllGames(page,query){
    this.httpClient.get(`https://rawg.io/api/games?search=${query}&page=${page}`).subscribe(
        

        (data: any) => {
            
          this.games = data.results
          this.allGames.emit(this.games)
      },
      (error: any) => console.error(error),

    )
  }

  


}