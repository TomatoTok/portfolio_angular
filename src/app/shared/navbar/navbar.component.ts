import { Component ,ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild('mySideNav') sideNav!: ElementRef<HTMLElement>; // Specify HTMLElement type
  abierto = false;
  openNav() {
    // Check if sideNav exists before accessing its style
    if (this.sideNav && !this.abierto) {
      this.abierto = true;
      this.sideNav.nativeElement.style.width = '350px';
    }else{
      if (this.sideNav && this.abierto) {
        this.abierto = false;
        this.sideNav.nativeElement.style.width = '0';
      }
    }
  }

  closeNav() {
    if (this.sideNav && this.abierto) {
      this.abierto = false;
      this.sideNav.nativeElement.style.width = '0';
    }
  }
}
