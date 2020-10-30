import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DevelopersService } from '@app/services/developers.service'


@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit , OnDestroy {

    @Input() results : any = ''
    sub : any = ''
    page : number = 1
    next : any

  constructor(private developers: DevelopersService) { }

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
   
    this.developers.getAllDevelopers(this.page)
    

}


  ngOnInit(): void {
      
        this.developers.getAllDevelopers(this.page)
        this.sub = this.developers.allDevelopers.subscribe((data: any) => {
        this.results = data
        this.next = data.next
        
    })
  }
  ngOnDestroy():void {
    this.sub.unsubscribe()
    this.page = 1
}

}
