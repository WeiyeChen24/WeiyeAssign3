import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  sname = "Weiye Chen";
  sid = "991527063";
  date = this.getDate();

  getDate() {
    let date = new Date();
    let year = date.getFullYear();
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    let month = months[date.getMonth()];
    let day = date.getDate();
    return `${month} ${day}, ${year}`;
  }

}
