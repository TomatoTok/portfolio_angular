import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.css']
})
export class SingleListComponent {
@Input('title') title = ""; 
@Input('subtitle') subtitle = ""; 
@Input('description') description = ""; 
}
