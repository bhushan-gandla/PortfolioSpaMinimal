import { Component, OnInit,  ElementRef, Renderer2 } from '@angular/core';
import { portfolioItems } from './portfolio.constants';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  

  portfolioItems = portfolioItems;

  top: number = 0;
  left: number = 0;
  right: number = 0;
  bottom: number = 0;
  width: number = 0;
  height: number = 0;
 
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
    this.top = rect.top;
    this.left = rect.left;
    this.right = rect.right;
    this.bottom = rect.bottom;
    this.width = rect.width;
    this. height = rect.height;

    console.log(this.top + " "  + this.right  + " "  +  this.bottom + " "  + this.left + " " + this.width + " " + this.height) ;
 
    // const button = this.elRef.nativeElement.querySelector('button');
    this.renderer.setStyle(parentElement, 'top', this.top + "px");
    this.renderer.setStyle(parentElement, 'left', this.left + "px");
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

  exitFullScreen(portfolioItem: any, event: MouseEvent){
    const element = event.target as HTMLElement;
    // console.log(element);

    const parentElement = element.parentNode as HTMLElement;
    console.log(this.top + " "  + this.right  + " "  +  this.bottom + " "  + this.left + " " + this.width + " " + this.height) ;

    this.renderer.setStyle(parentElement, 'height', this.height + "px");
    this.renderer.setStyle(parentElement, 'width', this.width + "px");

    this.renderer.setStyle(parentElement, 'z-index', '1');
    
    this.renderer.setStyle(parentElement, 'top', this.top + "px");
    this.renderer.setStyle(parentElement, 'left', this.left + "px");
    setTimeout(() => {
      //   // code to be executed after a delay
        // portfolioItem.clicked = !portfolioItem.clicked; 
        // this.renderer.setStyle(parentElement, 'top', this.top + "px");
        // this.renderer.setStyle(parentElement, 'left', this.left + "px");
        this.renderer.setStyle(parentElement, 'position', 'static');
        
      }, 2000);
      // this.renderer.setStyle(parentElement, 'position', 'static');


    // setTimeout(() => {
    //   this.renderer.setStyle(parentElement, 'position', 'static');

        
    //   }, 500);


  }
  event(event: any) {
    throw new Error('Method not implemented.');
  }

  setStylePropForFullScreen(clickedElement: any){
    console.log(clickedElement);
  }

}
