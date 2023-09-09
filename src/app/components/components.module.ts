import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioComponent } from './bio/bio.component';
import { SliderComponent } from './slider/slider.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NewsComponent } from './news/news.component';
import { ModalsComponent } from './modals/modals.component';



@NgModule({
  declarations: [
    BioComponent,
    SliderComponent,
    ExperienceComponent,
    EducationComponent,
    ResumeComponent,
    PortfolioComponent,
    NewsComponent,
    ModalsComponent
  ],
  imports: [
    CommonModule
  ],
exports: [
  BioComponent,
  SliderComponent,
  ExperienceComponent
]
})
export class ComponentsModule { }
