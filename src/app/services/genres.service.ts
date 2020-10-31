import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GenresService {

    @Output() allGenres: EventEmitter<any> = new EventEmitter()
    private genres : any = []

    constructor(private httpClient: HttpClient) { }

    getGenres() {
        this.httpClient.get(`https://api.rawg.io/api/genres`).subscribe(
           
            (data: any) => {
                
                this.genres = data.results
                this.allGenres.emit(this.genres)
            },
            (error: any) => console.error(error),
            
        )
    
    }
    
}