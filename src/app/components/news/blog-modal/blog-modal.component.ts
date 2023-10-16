import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html',
  styleUrls: ['./blog-modal.component.css'],
})
export class BlogModalComponent {
  @Input('id') id = ''; 
  @Input('title') title = ''; 
  @Input('type_1') type_1 = false;
  @Input('type_2') type_2 = false;
  @Input('type_3') type_3 = false;
}
