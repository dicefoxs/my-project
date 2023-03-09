import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
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

