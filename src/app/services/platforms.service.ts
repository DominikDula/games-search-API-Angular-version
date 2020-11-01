import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PlatformsService {

    @Output() allPlatforms: EventEmitter<any> = new EventEmitter()
    private platforms : any = []

    constructor(private httpClient: HttpClient) { }

    getPlatforms() {
        this.httpClient.get(`https://api.rawg.io/api/platforms`).subscribe(
           
            (data: any) => {
                
                this.platforms = data.results
                this.allPlatforms.emit(this.platforms)
            },
            (error: any) => console.error(error),
            
        )
    
    }
    
}