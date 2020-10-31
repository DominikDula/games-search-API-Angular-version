import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { GenresService } from "@app/services/genres.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit,OnDestroy {
    @Input() results : any = ''
    sub : any = ''

  constructor(private genres: GenresService) { }

  ngOnInit(): void {
      this.genres.getGenres()
      this.sub = this.genres.allGenres.subscribe(
          (data :any) =>{
            this.results = data
          }
      )
  }
  ngOnDestroy():void {
      this.sub.unsubscribe()
  }

}
