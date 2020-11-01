import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TagsService {
    @Output() allTags: EventEmitter<any> = new EventEmitter()
    private tags : any = []

  constructor(private httpClient: HttpClient) { }




   getAllTags(page) {
    this.httpClient.get(`https://api.rawg.io/api/tags?page_size=20&page=${page}`).subscribe(
       
        (data: any) => {
            
            this.tags = data.results
            this.allTags.emit(this.tags)
        },
        (error: any) => console.error(error),
        
    )

}
  


}
