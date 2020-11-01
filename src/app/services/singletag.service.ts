import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SingletagService {

    @Output() singleTag: EventEmitter<any> = new EventEmitter()
    @Output() singleTagInfo: EventEmitter<any> = new EventEmitter()
    private results : any = []
    info : any

    constructor(private httpClient: HttpClient) { }

    getSingleTag(slug : string,page : number) {

        this.httpClient.get(`https://api.rawg.io/api/games?tags=${slug}&page=${page}`).subscribe(
    
            (data: any) => {
                this.results = data
                this.singleTag.emit(this.results)
            },
            (error: any) => console.error(error),
        )
       
    }

     getTagInfo(slug : string) {

        this.httpClient.get(`https://api.rawg.io/api/tags/${slug}`).subscribe(
    
            (data: any) => {
                this.info = data
                this.singleTagInfo.emit(this.info)
            },
            (error: any) => console.error(error),
        )


        
        }
    
}