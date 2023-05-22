import { Component, OnInit,  ElementRef, Renderer2 } from '@angular/core';
import { portfolioItems } from './portfolio.constants';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioItems = portfolioItems;

 
  // getIndex: number;
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    console.log(this.portfolioItems);
  }

  isFullScreen(portfolioItem: any, event: MouseEvent){
    const element = event.target as HTMLElement;
    // this.setStylePropForFullScreen(element);
    const parentElement = element.parentNode as HTMLElement;
    console.log(parentElement);

    const rect = parentElement.getBoundingClientRect();
    const top = rect.top;

    // const top = parentElement.offsetTop;
    const left = parentElement.offsetLeft;
    const right = left + parentElement.offsetWidth;
    const bottom = top + parentElement.offsetHeight;

    console.log(top + " "  + right  + " "  +  bottom + " "  + left) ;
 
    // const button = this.elRef.nativeElement.querySelector('button');
    this.renderer.setStyle(parentElement, 'top', top + "px");
    this.renderer.setStyle(parentElement, 'left', left + "px");
    this.renderer.setStyle(parentElement, 'position', 'fixed');
    
    // this.renderer.setStyle(parentElement, 'right', right + "px");
    // this.renderer.setStyle(parentElement, 'bottom', bottom + "px");



      setTimeout(() => {
    //   // code to be executed after a delay
      // portfolioItem.clicked = !portfolioItem.clicked; 
      this.renderer.setStyle(parentElement, 'z-index', '1');
      this.renderer.setStyle(parentElement, 'top', '0');
      this.renderer.setStyle(parentElement, 'left', '0');
      this.renderer.setStyle(parentElement, 'height', '100vh');
      this.renderer.setStyle(parentElement, 'width', '100vw');
    }, 100);

    // console.log(portfolioItem);

    // portfolioItem;

    // const element = portfolioItem;
    // this.renderer.setStyle(portfolioItem, 'background-color', 'blue');
    // this.renderer.setStyle(element, 'color', 'white');

    // portfolioItem.position = "fixed";

    portfolioItem.clicked = !portfolioItem.clicked;

    // setTimeout(() => {
    //   // code to be executed after a delay
    //   portfolioItem.clicked = !portfolioItem.clicked;
    // }, 1000);
    // console.log(portfolioItem.clicked);

    
    // const className = event.target.classList[0];
    // console.log(event.target);
    
  }
  event(event: any) {
    throw new Error('Method not implemented.');
  }

  setStylePropForFullScreen(clickedElement: any){
    console.log(clickedElement);
  }

}
