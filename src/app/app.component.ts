import { AfterViewInit, Component, ViewChild, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  scrollPoint1(el: HTMLElement) {
    // el.scrollIntoView({behavior: "smooth"});
    el.scrollIntoView();
  }
  scrollPoint2(el: HTMLElement) {
    // el.scrollIntoView({behavior: "smooth"});
    el.scrollIntoView();
  }
  scrollPoint3(el: HTMLElement) {
    // el.scrollIntoView({behavior: "smooth"});
    el.scrollIntoView();
  }
  scrollPoint4(el: HTMLElement) {
    // el.scrollIntoView({behavior: "smooth"});
    el.scrollIntoView();
  }
  scrollPoint5(el: HTMLElement) {
    // el.scrollIntoView({behavior: "smooth"});
    el.scrollIntoView({behavior: 'smooth'});
  }
  scrollPoint6(el: HTMLElement) {
    // el.scrollIntoView({behavior: "smooth"});
    el.scrollIntoView();
  }
  
  
  @ViewChild('header') header: any;
  @HostListener('window:scroll', []) onWindowScroll(){
    let headers = this.header.nativeElement;
    const fixedNav = headers.offsetTop;
    if(window.pageYOffset > fixedNav){
      headers.classList.add('navbar-fixed');
    }else{
      headers.classList.remove('navbar-fixed');
    }
  }
  title = 'my-project';
  @ViewChild('hamburger') hamburger: any;
  @ViewChild('navMenu') navMenu: any;
  @ViewChild('toHome') toHome: any;

  ngAfterViewInit(){
    // Hamburger
    let burger = this.hamburger.nativeElement;
    let menuNav = this.navMenu.nativeElement;
    burger.addEventListener('click', function(){
      burger.classList.toggle('hamburger-active');
      menuNav.classList.toggle('hidden');
    });
  }

    
}

