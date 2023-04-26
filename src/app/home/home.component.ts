import { Component, OnInit,HostListener,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  lastScrollTop = 0;
  scrollLock = true;
  // htmlTag = document.getElementsByTagName("html");



  

  // @HostListener('document:scroll', ['$event']) 
  scrollHandler(event: any): void{
    console.log("dsfwa");
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    // document.documentElement.setAttribute('style', 'position: fixed;');
    if (st > this.lastScrollTop) {
      console.log("down");
       // downscroll code
    } else if (st < this.lastScrollTop) {
      console.log("up");
       // upscroll code
    } // else was horizontal scroll
    this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

  }

  constructor() { }

  ngOnInit(): void {
    // document.getElementsByTagName("html").setAttribute('style', 'color: red; font-size: 20px;');
    
    // if(this.scrollLock = true){
    //   // document.documentElement.setAttribute('style', 'overflow: hidden;');
    //   window.scrollTo(0, 0);
    // }
  }

}
