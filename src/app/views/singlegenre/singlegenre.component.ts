import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { SinglegenreService } from '@app/services/singlegenre.service'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-singlegenre',
  templateUrl: './singlegenre.component.html',
  styleUrls: ['./singlegenre.component.scss']
})
export class SinglegenreComponent implements OnInit , OnDestroy {

    @Input() results : any = ''
    slug : string
    sub : any
    sub2 : any
    info : any
    page : number = 1
    next : any

  constructor(private singlegenre: SinglegenreService,private route: ActivatedRoute) { }

  clickPage(event){
    if(event.target.className === 'next'){
        if(this.next === null){
            return
        }
        this.page+=1
        window.scrollTo(0, 0);
    }
    if(event.target.className === 'prev'){
        if(this.page<=1){
            return
        }
        this.page-=1
        window.scrollTo(0, 0);
    }
   
    this.singlegenre.getSingleGenre(this.slug,this.page)

    
    

}

ngOnInit(): void {
    this.slug = this.route.snapshot.params.slug
    this.singlegenre.getSingleGenre(this.slug,this.page)
    this.sub = this.singlegenre.singleGenre.subscribe((data: any) => {
        this.results = data
        this.next = data.next
        
    })
    this.singlegenre.getGenreInfo(this.slug)
    this.sub2 = this.singlegenre.singleGenreInfo.subscribe((data: any) => {

        
        this.info = data
        
    })
  }
  ngOnDestroy():void {
    this.sub.unsubscribe()
    this.sub2.unsubscribe()
}


}
