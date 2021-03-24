import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Indicadores', url: '/folder', icon: 'cash' },
    { title: 'Noticias', url: '/news', icon: 'newspaper' },
  ];
  constructor() {}
}
