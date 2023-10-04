import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
@Input('img') img = "";
@Input('type_img') type_img = "";
@Input('skill_name') skill_name = "";
}
