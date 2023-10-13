import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
@Input('id') id = "";
@Input('img') img = "";
@Input('second_img') second_img = "";
@Input('thirth_img') thirth_img = "";
@Input('type') type = "";
@Input('title') title = "";
@Input('first_text') first_text = "";
@Input('second_text') second_text = "";
@Input('github_link') github_link = "";
@Input('page_link') page_link = "";
@Input('has_a_web') has_a_web = false;
@Input('has_links') has_links = true;
@Input('no_link_text') no_link_text = "";
@Input('custom_id') custom_id = "";



}
