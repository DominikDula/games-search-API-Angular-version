import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {

@Input() item :any

  constructor() { }

  



  ngOnInit(): void {
  }

}
