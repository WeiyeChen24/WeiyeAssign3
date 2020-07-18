import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{

  side;

  constructor(){
    this.getRandomDice();
  }
  
  getRandomDice(){
    this.side = Math.floor(Math.random() * 6 + 1);
  }

}
