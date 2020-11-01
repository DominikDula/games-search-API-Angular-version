import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TagsService } from '@app/services/tags.service'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit,OnDestroy {

    @Input() results : any = ''
    sub : any = ''
    page : number = 1
    next : any

  constructor(private tags: TagsService) { }

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
   
    this.tags.getAllTags(this.page)
    

}

ngOnInit(): void {
      
    this.tags.getAllTags(this.page)
    this.sub = this.tags.allTags.subscribe((data: any) => {
    this.results = data
    this.next = data.next
    
})
}
ngOnDestroy():void {
this.sub.unsubscribe()
this.page = 1
}



}
