import { Component, OnInit } from '@angular/core';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private translationService: TranslationService) {}

  async ngOnInit(): Promise<void> {
    await this.translationService.initialize();
  }
}
