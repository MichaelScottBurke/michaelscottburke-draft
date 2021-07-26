import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  navLinks = [
    {
      label: 'about',
      route: 'about'
    },
    {
      label: 'resume',
      route: 'resume'
    },
    {
      label: 'portfolio',
      route: 'portfolio'
    },
    {
      label: 'contact',
      route: 'contact'
    }
  ];
}
