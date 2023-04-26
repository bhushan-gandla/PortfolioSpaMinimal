import { Component, OnInit } from '@angular/core';
import { portfolioItems } from './portfolio.constants';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioItems = portfolioItems;
  // getIndex: number;
  
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.portfolioItems);
  }

  goFullScreen(event: MouseEvent){
    console.log(event);
  }

}
