import { Pipe, PipeTransform, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Subscription, combineLatest } from 'rxjs';

@Pipe({
  name: 'translate',
  pure: false // Importante: permite que el pipe se actualice cuando cambia el idioma
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private subscription?: Subscription;
  
  constructor(
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {
    // Suscribirse a cambios de idioma Y a cuando las traducciones estén listas
    this.subscription = combineLatest([
      this.translationService.currentLang$,
      this.translationService.translationsReady$
    ]).subscribe(([lang, ready]) => {
      if (ready) {
        this.cdr.markForCheck();
      }
    });
  }

  transform(key: string): string {
    if (!key) return '';
    return this.translationService.translate(key);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}