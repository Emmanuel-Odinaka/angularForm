import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonInfo: any = [
    {
      name: "button1",
      id: "but1"
    },
    {
      name: "button2",
      id: "but2"
    },

  ]
}
