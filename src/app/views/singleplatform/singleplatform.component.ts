import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { SingleplatformService } from '@app/services/singleplatform.service'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-singleplatform',
  templateUrl: './singleplatform.component.html',
  styleUrls: ['./singleplatform.component.scss']
})
export class SingleplatformComponent implements OnInit , OnDestroy {

    @Input() results : any = ''
    id : string
    sub : any
    sub2 : any
    info : any
    page : number = 1
    next : any

  constructor(private singleplatform: SingleplatformService,private route: ActivatedRoute) { }

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
   
    this.singleplatform.getSinglePlatform(this.id,this.page)

    
    

}

ngOnInit(): void {        
    this.id = this.route.snapshot.queryParams.id
    this.singleplatform.getSinglePlatform(this.id,this.page)
    this.sub = this.singleplatform.singlePlatform.subscribe((data: any) => {
        this.results = data
        this.next = data.next
        
    })
    this.singleplatform.getPlatformInfo(this.id)
    this.sub2 = this.singleplatform.singlePlatformInfo.subscribe((data: any) => {

        
        this.info = data
        
    })
  }
  ngOnDestroy():void {
    this.sub.unsubscribe()
    this.sub2.unsubscribe()
}


}



