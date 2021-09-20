import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}


// ngAfterViewInit() {
  //   //use here
  //   $('button').click(function () {
    //     alert('Encentral');
    //   });
    // }
    // }
    
    //   $('button').click(function() {
    //     alert('GeeksForGeeks');
    // });
    // (<any>$('.ui.radio.checkbox')).checkbox();
    // (<any>$('.ui.dropdown')).dropdown();