import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SingledeveloperService {

    @Output() singleDeveloper: EventEmitter<any> = new EventEmitter()
    @Output() singleDeveloperInfo: EventEmitter<any> = new EventEmitter()
    private results : any = []
    info : any

    constructor(private httpClient: HttpClient) { }

    getSingleDeveloper(slug : string,page : number) {

        this.httpClient.get(`https://api.rawg.io/api/games?developers=${slug}&page=${page}`).subscribe(
    
            (data: any) => {
                this.results = data
                this.singleDeveloper.emit(this.results)
            },
            (error: any) => console.error(error),
        )
       
    }

     getDeveloperInfo(slug : string) {

        this.httpClient.get(`https://api.rawg.io/api/developers/${slug}`).subscribe(
    
            (data: any) => {
                this.info = data
                this.singleDeveloperInfo.emit(this.info)
            },
            (error: any) => console.error(error),
        )


        
        }
    
}