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



@NgModule({
  declarations: [
    BioComponent,
    SliderComponent,
    ExperienceComponent,
    EducationComponent,
    PortfolioComponent,
    NewsComponent,
    ModalsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,ResumeModule
  ],
exports: [
  BioComponent,
  SliderComponent,
  ExperienceComponent
]
})
export class ComponentsModule { }
