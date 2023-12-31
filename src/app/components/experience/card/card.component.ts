import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input('image') image = "";
@Input('alt') alt = "";
@Input('date') date = "";
@Input('title') title = "";
@Input('subtitle') subtitle = "";
@Input('description') description = "";
@Input('href') href = "";
@Input('case') case = "";

}
