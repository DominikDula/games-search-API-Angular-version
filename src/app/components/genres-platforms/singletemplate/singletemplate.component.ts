import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'single-template',
  templateUrl: './singletemplate.component.html',
  styleUrls: ['./singletemplate.component.scss']
})
export class SingletemplateComponent implements OnInit {

    @Input() info :any

  constructor() { }

  ngOnInit(): void {
  }

}
