import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-proyect',
  templateUrl: './single-proyect.component.html',
  styleUrls: ['./single-proyect.component.css']
})
export class SingleProyectComponent {
  @Input('title') title = "";
  @Input('img') img = "";
  @Input('modal') modal = "";
  @Input('category') category = "";
}
