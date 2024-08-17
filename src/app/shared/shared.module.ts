import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AnimationComponent } from './footer/animation/animation.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AnimationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent

  ]
})
export class SharedModule { }
