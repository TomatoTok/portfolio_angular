import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SingleListComponent } from './single-list/single-list.component';
import { ResumeComponent } from './resume.component';
import { SkillComponent } from './skill/skill.component';
import { CompanyComponent } from './company/company.component';



@NgModule({
  declarations: [
    SingleListComponent,ResumeComponent, SkillComponent, CompanyComponent
  ],
  imports: [
    CommonModule,NgOptimizedImage
  ],
  exports:[SingleListComponent,ResumeComponent,SkillComponent]
})
export class ResumeModule { }
