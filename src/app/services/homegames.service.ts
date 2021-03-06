import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomegamesService {
    @Output() trendingGames: EventEmitter<any> = new EventEmitter()
    private games : any = []

  constructor(private httpClient: HttpClient) { }


  getTrendingGame(page){
    this.httpClient.get(`https://rawg.io/api/games/lists/main?page=${page}`).subscribe(
        

        (data: any) => {
            
          this.games = data.results.reduce((unique, o) => {
            if(!unique.some(obj => obj.slug === o.slug )) {
                unique.push(o);
            }

                return unique;
        },[])
          this.trendingGames.emit(this.games)
      },
      (error: any) => console.error(error),

    )
  }

  


}
