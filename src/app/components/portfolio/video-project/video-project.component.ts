import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-project',
  templateUrl: './video-project.component.html',
  styleUrls: ['./video-project.component.css']
})
export class VideoProjectComponent {
  @Input('title') title = "";
  @Input('vid') vid = "";
  @Input('modal') modal = "";
  @Input('category') category = "";
}
