import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msb-nav-header',
  templateUrl: './msb-nav-header.component.html',
  styleUrls: ['./msb-nav-header.component.scss']
})
export class MsbNavHeaderComponent implements OnInit {
  navLinks = [
    {
      label: 'work',
      route: 'portfolio'
    },
    /*
    {
      label: 'about',
      route: 'about'
    },
    */
    {
      label: 'resume',
      route: 'resume'
    },
    {
      label: 'contact',
      route: 'contact'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}