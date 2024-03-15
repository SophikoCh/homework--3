import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-task4',
  templateUrl: './section-task4.component.html',
  styleUrls: ['./section-task4.component.scss']
})
export class SectionTask4Component implements OnInit {
  txtFalse = true;
  istrue = false;
  isClick = false;
  constructor() { }
  

  ngOnInit(): void {
  }

  colorChangeActive() {
    this.txtFalse =!this.txtFalse;
    this.isClick =!this.isClick;
  }

}
