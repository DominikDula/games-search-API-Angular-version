import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SinglegenreService {

    @Output() singleGenre: EventEmitter<any> = new EventEmitter()
    @Output() singleGenreInfo: EventEmitter<any> = new EventEmitter()
    private results : any = []
    info : any

    constructor(private httpClient: HttpClient) { }

    getSingleGenre(slug : string,page : number) {

        this.httpClient.get(`https://api.rawg.io/api/games?genres=${slug}&page=${page}`).subscribe(
    
            (data: any) => {
                this.results = data
                this.singleGenre.emit(this.results)
            },
            (error: any) => console.error(error),
        )
       
    }

     getGenreInfo(slug : string) {

        this.httpClient.get(`https://api.rawg.io/api/genres/${slug}`).subscribe(
    
            (data: any) => {
                this.info = data
                this.singleGenreInfo.emit(this.info)
            },
            (error: any) => console.error(error),
        )


        
        }
    
}