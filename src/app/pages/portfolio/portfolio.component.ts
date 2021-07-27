import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects = [
    {
      thumbnail: 'https://raw.githubusercontent.com/MichaelScottBurke/images/cabaf9156376b7389efce0438353dd999186bac6/img-placeholder-1_1.svg',
      title: '',
      role: 'Lead UX Designer, UX Engineer',
      description: '',
      link: ''
    },
    {
      thumbnail: 'https://raw.githubusercontent.com/MichaelScottBurke/images/cabaf9156376b7389efce0438353dd999186bac6/img-placeholder-1_1.svg',
      title: '',
      role: '',
      description: '',
      link: ''
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}