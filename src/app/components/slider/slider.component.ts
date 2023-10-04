import {AfterViewInit, Component,OnInit  } from '@angular/core';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit{

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    feather.replace();
  }
}
