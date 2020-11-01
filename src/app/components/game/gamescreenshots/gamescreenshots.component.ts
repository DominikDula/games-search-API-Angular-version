import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { SinglegameService } from '@app/services/singlegame.service'


@Component({
  selector: 'game-screenshots',
  templateUrl: './gamescreenshots.component.html',
  styleUrls: ['./gamescreenshots.component.scss']
})
export class GamescreenshotsComponent implements OnInit,OnDestroy {

    @Input() results : any = ''
    @Input() slug : any = ''
    sub : any

  constructor(private screens: SinglegameService) { }

  ngOnInit(): void {
      this.screens.GetGameScreenshots(this.slug)
      this.sub = this.screens.screens.subscribe((data: any) => {
        this.results = data
   
    })

  }

  ngOnDestroy():void{
    this.sub.unsubscribe()
  }

}
