import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'search-games',
  templateUrl: './search-games.component.html',
  styleUrls: ['./search-games.component.scss']
})
export class SearchGamesComponent implements OnInit {

    @ViewChild('gameInput', { static: false }) gameInput: ElementRef

  constructor(private router: Router) { }

  GlobalSearch(value,event){
    event.preventDefault()
    value = this.gameInput.nativeElement.value
    this.router.navigate(['/search',value])
    this.gameInput.nativeElement.value = ''
    
  }

  ngOnInit(): void {

  }

  

}
