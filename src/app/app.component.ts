import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import {transition,trigger,query,style,animate,group} from '@angular/animations';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [    trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(-250%)' }),
                animate('1.2s ease-in-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('1.2s ease-in-out', style({ transform: 'translateX(-250%)' }))
            ], { optional: true }),
        ])
    ]),
])]
})
export class AppComponent implements OnInit {
  title = 'game-search-angular';

  constructor(private router: Router) { }


  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}

}
