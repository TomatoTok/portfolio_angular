import { Component ,ViewChild, ElementRef, ChangeDetectorRef  } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild('mySideNav') sideNav!: ElementRef<HTMLElement>; // Specify HTMLElement type
  abierto = false;
  currentLang$ = this.translationService.currentLang$;

  constructor(
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {}

  async changeLanguage(lang: string): Promise<void> {
    console.log(`Changing language to: ${lang}`);
    await this.translationService.changeLanguage(lang);
    // Forzar detección de cambios después de cargar traducciones
    this.cdr.detectChanges();
  }
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
