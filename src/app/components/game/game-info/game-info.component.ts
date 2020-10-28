import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {

@Input() game :any
count :number = -1
iterator :number = 0
timeout :any

  constructor() { }

  PlayVideo(event){
      
      event.target.children[2].children[0].currentTime = 0
      event.target.children[2].children[0].autoplay = true
      event.target.children[2].classList.add("game-video-show");
      
  }
  StopVideo(event){
    event.target.children[2].classList.remove("game-video-show");
      
  }

  ImageAnimation(){
    if( this.game.short_screenshots.length<1){
        return false
    }

   if(this.count>=this.game.short_screenshots.length-1){
        this.count=-1
    }
    
    this.count++;
    this.timeout=   setTimeout(() =>{this.ImageAnimation()}, 1000);
    this.iterator=this.count
    
         

}
 StopImageAnimation(){
     this.iterator=0
     this.count=-1
      clearTimeout(this.timeout)
    

}

  ngOnInit(): void {
  }

}
