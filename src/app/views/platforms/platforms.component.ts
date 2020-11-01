import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PlatformsService } from "@app/services/platforms.service";

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements OnInit {
    @Input() results : any = ''
    sub : any = ''

  constructor(private platforms: PlatformsService) { }

  ngOnInit(): void {
    this.platforms.getPlatforms()
    this.sub = this.platforms.allPlatforms.subscribe(
        (data :any) =>{
          this.results = data
        }
    )
}
ngOnDestroy():void {
    this.sub.unsubscribe()
}

}
