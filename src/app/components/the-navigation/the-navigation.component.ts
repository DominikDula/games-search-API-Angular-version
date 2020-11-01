import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-navigation',
  templateUrl: './the-navigation.component.html',
  styleUrls: ['./the-navigation.component.scss']
})
export class TheNavigationComponent implements OnInit {

    isActive :boolean = true
    isNotActive :boolean = false

  constructor() { }

  ToggleNav() {

    if(this.isActive){
        document.getElementsByTagName("html")
        document.querySelector("html").classList.add("hide") 
    }else if(this.isNotActive){
        document.querySelector("html").classList.remove("hide") 
    }

    this.isActive = !this.isActive
    this.isNotActive = !this.isNotActive   
}

NavClick(event){
    
    if(window.innerWidth>600){
        return false
    }

    if(this.isActive){
        document.querySelector("html").classList.add("hide") 
    }else if(this.isNotActive){
        document.querySelector("html").classList.remove("hide")  
    }
    if(event.target.id === 'nav'){
        return false
    } 

    this.isActive = true
    this.isNotActive = false
    
   
    
    
}

  ngOnInit(): void {

      
  }

}
