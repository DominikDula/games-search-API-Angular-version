import { Component, OnInit, Input, OnDestroy} from '@angular/core'
import { HomegamesService } from '@app/services/homegames.service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {

    @Input() results : any = ''
    @Input() load : any = ''
    next : any
    sub : any = ''
    page : number = 1

  constructor(private homeGames: HomegamesService) { }

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
   
    this.homeGames.getTrendingGame(this.page)
    

}

  ngOnInit(): void {
        this.homeGames.getTrendingGame(this.page)
        this.sub = this.homeGames.trendingGames.subscribe((data: any) => {
        this.results = data
        this.next = data.next
        
    })
  }
  ngOnDestroy():void {
    this.sub.unsubscribe()
    this.page = 1
}

}
