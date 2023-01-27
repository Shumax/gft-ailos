import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  icons: Array<any> = [
    { name: 'menu', class: 'opacity'},
    { name: 'search', class: ''},
    { name: 'star_border', class: ''},
    { name: 'textsms', class: ''},
    { name: 'blur_linear', class: ''},
    { name: 'account_balance', class: ''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
