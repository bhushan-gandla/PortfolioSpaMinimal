import { Component, Input, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
// import { ScrollService } from '../services/scroll-service';
import { ViewportRuler } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('rolesPlaceholder') rolesPlaceholder!: ElementRef;
  @ViewChild('rolesWrapper') rolesWrapper!: ElementRef;
  @ViewChild('expPlaceholder') expPlaceholder!: ElementRef;
  @ViewChild('myElement', { static: true }) myElementRef!: ElementRef<HTMLDivElement>;
  

  // data: string;
  // isElementVisible1: any;
  isElementVisible: any;


  @Input() lastScrollTop1: any;

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    // console.log(document.documentElement.scrollTop);
    this.roleLastScrolled();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    // Your code here
    console.log('Window resized');
    this.setAttributes();
  }

  setAttributes(){
    console.log(this.rolesPlaceholder); 
    document.documentElement.style.setProperty('--roles-y', this.rolesPlaceholder.nativeElement.offsetTop + "px");
    document.documentElement.style.setProperty('--roles-x', this.rolesPlaceholder.nativeElement.offsetLeft + "px");
    document.documentElement.style.setProperty('--exp-y', this.expPlaceholder.nativeElement.offsetTop + "px");
    document.documentElement.style.setProperty('--exp-x', this.expPlaceholder.nativeElement.offsetLeft + "px");
  }
  // constructor(private ScrollService: ScrollService) {
  //   this.data = ScrollService.getData();
  //   console.log(this.data);
  // }

  public roleLastScrolled(){
    const myElement = this.myElementRef.nativeElement;

    // Determine if the element is currently visible in the viewport
    const elementBounds = myElement.getBoundingClientRect();
    const viewportBounds = this.viewportRuler.getViewportRect();
    var isElementVisible =
      elementBounds.bottom > viewportBounds.top &&
      elementBounds.top < viewportBounds.bottom;

    console.log('Is the element visible?', !isElementVisible);
    
    // if(!isElementVisible){
    //   // console.log(document.getElementsByClassName(".roles-wrapper"));
    //   // document.getElementsByClassName(".roles-wrapper").style.color = "red";

    //   this.rolesWrapper.nativeElement.style.display = "none";
      
    //   this.rolesPlaceholder.nativeElement.innerHTML = "Hybrid Developer.";
    // }else{
    //   this.rolesPlaceholder.nativeElement.innerHTML = " ";
    //   this.rolesWrapper.nativeElement.style.display = "block";
    // }
  }

  constructor(private viewportRuler: ViewportRuler) {}

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    this.setAttributes();
    // document.documentElement.style.setProperty('--section-scroll-snapping', this.rolesPlaceholder.nativeElement.offsetLeft + "px");

    // ('style', 'overflow: this.rolesPlaceholder.nativeElement.offsetTop;');
  
  }

}
