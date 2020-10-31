import { Component, OnInit,Input,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit,AfterViewChecked {

@Input() game :any
count :number = -1
iterator :number = 0
timeout :any
showIcon :boolean = true
isHidden :boolean = false

  constructor() { }

  PlayVideo(event){
      event.target.children[2].children[0].currentTime = 0
      event.target.children[2].children[0].autoplay = true
      event.target.children[2].classList.add("game-video-show");
      this.showIcon = false
      
  }
  StopVideo(event){
    event.target.children[2].classList.remove("game-video-show");
    this.showIcon = true
      
  }
  ShowOnHover(){
    if(window.innerWidth<665){
        return false
    }
    this.isHidden = !this.isHidden

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

  ngAfterViewChecked(){
    
    
    
    if(this.game.genres.length <=0 && this.isHidden){
        return 
    }
   // remove last coma from genres//
   if(this.isHidden){
    let genre = document.querySelector(".genre")
    let last = genre.children[genre.children.length - 1]
    last.textContent = last.textContent.replace(',',' ')
   }
    

    

  }

}
