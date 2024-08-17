import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule, NgOptimizedImage } from '@angular/common';
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
import { HttpClientModule } from '@angular/common/http';
import { VideoProjectComponent } from './portfolio/video-project/video-project.component';
import { ModalVideoComponent } from './portfolio/modal-video/modal-video.component';
import { AnimationComponent } from './slider/animation/animation.component';

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
    BlogModalComponent,
    VideoProjectComponent,
    ModalVideoComponent,
    AnimationComponent
  ],
  imports: [
    NgOptimizedImage,
    CommonModule,
    ResumeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [BioComponent, SliderComponent, ExperienceComponent],
  providers: [],
})
export class ComponentsModule {}
