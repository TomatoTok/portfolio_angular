import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = new BehaviorSubject<string>('es');
  private translations: any = {};
  private isInitialized = false;
  private translationsReady = new BehaviorSubject<boolean>(false);
  
  currentLang$ = this.currentLang.asObservable();
  translationsReady$ = this.translationsReady.asObservable();

  constructor(private http: HttpClient) {
    // No llamar initializeLanguage aquí, lo haremos manualmente
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;
    
    // Detectar idioma guardado o del navegador
    const savedLang = localStorage.getItem('portfolio_lang');
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = savedLang || (['en', 'es'].includes(browserLang) ? browserLang : 'es');
    
    await this.loadTranslations(defaultLang);
    this.isInitialized = true;
  }

  async loadTranslations(lang: string): Promise<void> {
    try {
      console.log(`Loading translations for language: ${lang}`);
      // Usar firstValueFrom siguiendo el patrón de tu MailerService
      this.translations = await firstValueFrom(
        this.http.get(`assets/i18n/${lang}.json`)
      );
      console.log(`Translations loaded successfully for ${lang}:`, this.translations);
      this.currentLang.next(lang);
      this.translationsReady.next(true);
      localStorage.setItem('portfolio_lang', lang);
    } catch (error) {
      console.error(`Error loading translations for ${lang}:`, error);
      // Fallback a español si falla
      if (lang !== 'es') {
        console.log('Falling back to Spanish...');
        await this.loadTranslations('es');
      }
    }
  }

  changeLanguage(lang: string): Promise<void> {
    this.translationsReady.next(false); // Resetear estado antes de cargar
    return this.loadTranslations(lang);
  }

  translate(key: string): string {
    if (!this.translations || Object.keys(this.translations).length === 0) {
      console.warn(`Translations not loaded yet for key: ${key}`);
      return key;
    }

    const keys = key.split('.');
    let result = this.translations;
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        console.warn(`Translation missing for key: ${key}, current lang: ${this.currentLang.value}`);
        console.log('Available translations:', this.translations);
        // Retornar el texto en español como fallback si no está en inglés
        if (this.currentLang.value === 'en' && key.includes('navbar')) {
          const fallbacks: {[key: string]: string} = {
            'navbar.home': 'Home',
            'navbar.resume': 'Resume', 
            'navbar.education': 'Education',
            'navbar.portfolio': 'Portfolio',
            'navbar.experience': 'Experience',
            'navbar.blog': 'Blog',
            'navbar.footer': 'Footer'
          };
          return fallbacks[key] || key;
        }
        return key;
      }
    }
    
    return result || key;
  }

  getCurrentLanguage(): string {
    return this.currentLang.value;
  }

  // Método útil para obtener paths de CV según idioma
  getCVPath(): string {
    const cvPaths = {
      'en': 'assets/downloads/Tomas_Bascal_CV_ago2024.pdf',
      'es': 'assets/downloads/Tomas_Bascal_CV_ago2024.pdf'
    };
    return cvPaths[this.currentLang.value as keyof typeof cvPaths] || cvPaths['es'];
  }
}