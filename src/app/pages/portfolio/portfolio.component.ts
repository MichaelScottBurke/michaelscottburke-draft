import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects = [
    {
      thumbnail: '',
      title: '',
      role: 'Lead UX Designer, UX Engineer',
      description: '',
      link: ''
    },
    {
      thumbnail: '',
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