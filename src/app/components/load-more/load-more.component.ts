import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {

    @Output() load: EventEmitter<any> = new EventEmitter()

  constructor() { }

  loadpage(event){
      this.load.emit(event)
  }


  ngOnInit(): void {
  }

}
