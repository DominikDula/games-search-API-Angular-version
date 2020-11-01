import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { SingletagService } from '@app/services/singletag.service'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-singletag',
  templateUrl: './singletag.component.html',
  styleUrls: ['./singletag.component.scss']
})
export class SingletagComponent implements OnInit ,OnDestroy{

    @Input() results : any = ''
    slug : string
    sub : any
    sub2 : any
    info : any
    page : number = 1
    next : any

  constructor(private singletag: SingletagService,private route: ActivatedRoute) { }

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
   
    this.singletag.getSingleTag(this.slug,this.page)
    

}

ngOnInit(): void {
    this.slug = this.route.snapshot.params.slug
    this.singletag.getSingleTag(this.slug,this.page)
    this.sub = this.singletag.singleTag.subscribe((data: any) => {
        this.results = data
        this.next = data.next
        
    })
    this.singletag.getTagInfo(this.slug)
    this.sub2 = this.singletag.singleTagInfo.subscribe((data: any) => {

        
        this.info = data
        
    })
  }
  ngOnDestroy():void {
    this.sub.unsubscribe()
    this.sub2.unsubscribe()
}

}
