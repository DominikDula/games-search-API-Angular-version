import { Component, OnInit, Input, OnDestroy} from '@angular/core'
import { AllgamesService } from '@app/services/allgames.service'

@Component({
  selector: 'app-allgames',
  templateUrl: './allgames.component.html',
  styleUrls: ['./allgames.component.scss']
})
export class AllgamesComponent implements OnInit , OnDestroy {

    @Input() results : any = ''
    sub : any = ''
    page : number = 1
    next : any

  constructor(private allGames: AllgamesService) { }

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
   
    this.allGames.getAllGame(this.page)
    

}


  ngOnInit(): void {
      
    this.allGames.getAllGame(this.page)
    this.sub = this.allGames.allGames.subscribe((data: any) => {
    this.results = data
    this.next = data.next
    
})
}
    ngOnDestroy():void {
    this.sub.unsubscribe()
    this.page = 1
}

}
