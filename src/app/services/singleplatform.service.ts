import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingleplatformService {

    @Output() singlePlatform: EventEmitter<any> = new EventEmitter()
    @Output() singlePlatformInfo: EventEmitter<any> = new EventEmitter()
    private results : any = []
    info : any
    

  constructor(private httpClient: HttpClient) { }

  getSinglePlatform(id : string,page : number) {

    this.httpClient.get(`https://api.rawg.io/api/games?platforms=${id}&page=${page}`).subscribe(

        (data: any) => {
            this.results = data
            this.singlePlatform.emit(this.results)
        },
        (error: any) => console.error(error),
    )
   
}

 getPlatformInfo(id : string) {

    this.httpClient.get(`https://api.rawg.io/api/platforms/${id}`).subscribe(

        (data: any) => {
            this.info = data
            this.singlePlatformInfo.emit(this.info)
        },
        (error: any) => console.error(error),
    )


    
    }
}
