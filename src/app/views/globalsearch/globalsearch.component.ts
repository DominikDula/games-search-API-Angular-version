import { Component, OnInit, Input, OnDestroy} from '@angular/core'
import { GlobalgamesService } from '@app/services/globalsearch.service'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-globalsearch',
  templateUrl: './globalsearch.component.html',
  styleUrls: ['./globalsearch.component.scss']
})
export class GlobalsearchComponent implements OnInit,OnDestroy {


    @Input() results : any = ''
    @Input() load : any = ''
    next : any
    sub : any = ''
    page : number = 1
    query :string = ''

  constructor(private globalGames: GlobalgamesService,private route: ActivatedRoute) { }

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
   
    this.globalGames.getAllGames(this.page,this.query)
    

}

ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
        this.query=routeParams.query
        this.globalGames.getAllGames(this.page,this.query)
	});
    this.sub = this.globalGames.allGames.subscribe((data: any) => {
    this.results = data
    this.next = data.next
    this.page = 1
    
})
}
ngOnDestroy():void {
this.sub.unsubscribe()
this.page = 1
}




}


