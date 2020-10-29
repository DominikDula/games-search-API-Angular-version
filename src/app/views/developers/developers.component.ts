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

  constructor(private developers: DevelopersService) { }


  ngOnInit(): void {
      
        this.developers.getAllDevelopers()
        this.sub = this.developers.allDevelopers.subscribe((data: any) => {
        this.results = data
        
    })
  }
  ngOnDestroy():void {
    this.sub.unsubscribe()
    this.developers.page = 1
}

}
