import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  buttonText : string = "Ver más";
  /**
 * Esta función cambia el "Ver más" a "Ver menos"
 */
  changeSeeAll(){
    this.buttonText = "";
  }

}
