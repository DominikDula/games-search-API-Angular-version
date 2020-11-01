import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { SinglegameService } from '@app/services/singlegame.service'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-singlegame',
  templateUrl: './singlegame.component.html',
  styleUrls: ['./singlegame.component.scss']
})
export class SinglegameComponent implements OnInit , OnDestroy {
    @Input() results : any = ''
    slug : string
    about : string
    shortabout : string
    longabout : string
    boolean : boolean = true
    sub : any = ''

  constructor(private singlegame: SinglegameService,private route: ActivatedRoute) { }

    ReadMore(){
        this.about = this.longabout
        this.boolean = false
    }
    ReadLess(){
        this.about = this.shortabout +'...'
        this.boolean = true
    }

  ngOnInit(): void {
        this.slug = this.route.snapshot.params.slug
        this.singlegame.getSingleGame(this.slug)
        this.sub = this.singlegame.singleGame.subscribe((data: any) => {
        this.results = data
        this.about = data.description.substring(0,550) +'...'
        this.shortabout = data.description.substring(0,550)
        this.longabout = data.description

        
    })
  }
  ngOnDestroy():void {
    this.sub.unsubscribe()
}

}
