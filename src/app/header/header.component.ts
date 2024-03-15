import { NgSwitch } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  text: string = "text";
  constructor() { }
  
  ngOnInit(): void {
  }
  showText(value: string) {;
  }


}
