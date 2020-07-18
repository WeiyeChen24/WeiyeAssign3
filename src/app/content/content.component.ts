import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{

  sidenum;

  constructor(){
    this.getRandomDice();
  }
  
  getRandomDice(){
    this.sidenum = Math.floor(Math.random() * 6 + 1);
  }

}
