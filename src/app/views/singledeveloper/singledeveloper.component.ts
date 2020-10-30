import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { SingledeveloperService } from '@app/services/singledeveloper.service'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-singledeveloper',
  templateUrl: './singledeveloper.component.html',
  styleUrls: ['./singledeveloper.component.scss']
})
export class SingledeveloperComponent implements OnInit {

    @Input() results : any = ''
    slug : string
    sub : any
    sub2 : any
    info : string
    page : number = 1
    next : any

  constructor(private singledeveloper: SingledeveloperService,private route: ActivatedRoute) { }

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
   
    this.singledeveloper.getSingleDeveloper(this.slug,this.page)
    

}

  ngOnInit(): void {
    this.slug = this.route.snapshot.params.slug
    this.singledeveloper.getSingleDeveloper(this.slug,this.page)
    this.sub = this.singledeveloper.singleDeveloper.subscribe((data: any) => {
        this.results = data
        this.next = data.next
        
    })
    this.singledeveloper.getDeveloperInfo(this.slug)
    this.sub2 = this.singledeveloper.singleDeveloperInfo.subscribe((data: any) => {

        
        this.info = data
        
    })
  }
  ngOnDestroy():void {
    this.sub.unsubscribe()
    this.sub2.unsubscribe()
}

}
