import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customersData;
  responsiveOptions;
  val3: number = 5;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1200px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '992px',
        numVisible: 1,
        numScroll: 1
      },

      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

  }

  ngOnInit(): void {
    this.customersData = [
      { "imgSrc": "assets/customers-img.png", "title": "Alsabitha D Elizabeth", "description": "Teacher at holy cross", "text": "Looking for inspiration?  We’ve put together a huge collection of fun and educational classroom ideas to", "starsActive": 5, "starsNotActive": 5 },
      { "imgSrc": "assets/customers-img.png", "title": "Alsabitha D Elizabeth", "description": "Teacher at holy cross", "text": "Looking for inspiration?  We’ve put together a huge collection of fun and educational classroom ideas to", "starsActive": 5, "starsNotActive": 5 },
      { "imgSrc": "assets/customers-img.png", "title": "Alsabitha D Elizabeth", "description": "Teacher at holy cross", "text": "Looking for inspiration?  We’ve put together a huge collection of fun and educational classroom ideas to", "starsActive": 5, "starsNotActive": 5 },
      { "imgSrc": "assets/customers-img.png", "title": "Alsabitha D Elizabeth", "description": "Teacher at holy cross", "text": "Looking for inspiration?  We’ve put together a huge collection of fun and educational classroom ideas to", "starsActive": 5, "starsNotActive": 5 },
      { "imgSrc": "assets/customers-img.png", "title": "Alsabitha D Elizabeth", "description": "Teacher at holy cross", "text": "Looking for inspiration?  We’ve put together a huge collection of fun and educational classroom ideas to", "starsActive": 5, "starsNotActive": 5 },


    ]
  }

}
