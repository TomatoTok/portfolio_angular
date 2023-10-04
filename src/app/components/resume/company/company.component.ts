import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  @Input('img') img = "";
  @Input('type_img') type_img = "";
  @Input('company_name') company_name = "";
  
}
