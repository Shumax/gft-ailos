import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gft-ailos';

  icons: Array<any> = [
    { name: 'menu', class: 'opacity'},
    { name: 'search', class: ''},
    { name: 'star_border', class: ''},
    { name: 'textsms', class: ''},
    { name: 'blur_linear', class: ''},
    { name: 'account_balance', class: ''}
  ]

}
