import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BioComponent } from './bio/bio.component';
import { SliderComponent } from './slider/slider.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NewsComponent } from './news/news.component';
import { ModalsComponent } from './modals/modals.component';
import { CardComponent } from './experience/card/card.component';
import { ResumeModule } from './resume/resume.module';
import { SingleProyectComponent } from './portfolio/single-proyect/single-proyect.component';
import { ModalComponent } from './portfolio/modal/modal.component';
import { BlogModalComponent } from './news/blog-modal/blog-modal.component';



@NgModule({
  declarations: [
    BioComponent,
    SliderComponent,
    ExperienceComponent,
    EducationComponent,
    PortfolioComponent,
    NewsComponent,
    ModalsComponent,
    CardComponent,
    SingleProyectComponent,
    ModalComponent,
    BlogModalComponent
  ],
  imports: [
    CommonModule,ResumeModule,
  ],
exports: [
  BioComponent,
  SliderComponent,
  ExperienceComponent
]
})
export class ComponentsModule { }
