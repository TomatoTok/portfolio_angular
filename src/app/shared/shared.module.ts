import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AnimationComponent } from './footer/animation/animation.component';
import { TranslatePipe } from './pipes/translate.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AnimationComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    TranslatePipe
  ]
})
export class SharedModule { }
