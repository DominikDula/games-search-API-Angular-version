import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {
    @Output() allDevelopers: EventEmitter<any> = new EventEmitter()
    private developers : any = []

  constructor(private httpClient: HttpClient) { }




   getAllDevelopers(page) {
    this.httpClient.get(`https://api.rawg.io/api/developers?page_size=20&page=${page}`).subscribe(
       
        (data: any) => {
            
            this.developers = data.results
            this.allDevelopers.emit(this.developers)
        },
        (error: any) => console.error(error),
        
    )

}
  


}
