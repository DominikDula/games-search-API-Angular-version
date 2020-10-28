import { Component, OnInit, Input, OnDestroy} from '@angular/core'
import { HomegamesService } from '@app/services/homegames.service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {

    @Input() results : any = ''
    sub : any = ''

  constructor(private homeGames: HomegamesService) { }

//   click(){
    
//   this.homeGames.page++
//   this.homeGames.getTrendingGame()
// }

  ngOnInit(): void {
      
        this.homeGames.getTrendingGame()
        this.sub = this.homeGames.trendingGames.subscribe((data: any) => {
        this.results = data
        
    })
  }
  ngOnDestroy():void {
    this.sub.unsubscribe()
}

}
