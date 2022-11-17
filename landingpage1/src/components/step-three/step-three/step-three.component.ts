import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {
  
  streetAddress:string ='';
  houseNumber:string = '';
  postalCode:string = '';
  city ='';
  items: MenuItem[];
  activeIndex: number = 2;
  selectedCategory: any[];
  selectedCategoryTwo:any = null;
  selectedCategoryThree:any = null;

  date1: Date;
  date2: Date;

  categories: any[] = [{ name: 'Mobeliauf / abbau', key: '1' }, { name: 'Tragearbeiten', key: '2' }, { name: 'Umzvgafahrer', key: '3' },{ name: 'Ver Und Entpachen', key: '4' }, { name: 'Montagesrvice', key: '5' }, { name: 'LKW Be/ Enladen', key: '6' }];
  categoriesTwo: any[] = [{ name: 'Ver Und Entpachen', key: '1' }, { name: 'Montagesrvice', key: '2' }, { name: 'LKW Be/ Enladen', key: '3' }];
  categoriesThree: any[] = [{ name: 'Ja bitte', key: '1' }, { name: 'Nein , ich wahle selbst', key: '2' }];

  constructor() { }
  val = '12:24';
  ngOnInit(): void {
    this.selectedCategory = this.categories[0];
    this.selectedCategoryTwo = this.categoriesTwo[0];
    this.selectedCategoryThree= this.categoriesTwo[0];

    this.items = [{
      label: 'Personal',
      command: (event: any) => {
        this.activeIndex = 0;
        alert('clicked')
      }
    },
    {
      label: 'Seat',
      command: (event: any) => {
        this.activeIndex = 1;
      }
    },
    {
      label: 'Payment',
      command: (event: any) => {
        this.activeIndex = 2;
      }
    },
    {
      label: 'Confirmation',
      command: (event: any) => {
        this.activeIndex = 3;
      }
    },
    {
      label: 'Confirmation',
      command: (event: any) => {
        this.activeIndex = 4;
      }
    }
    ];

  }

  onClickBtn() {
    alert('button is clicked');
  }

  onClickTime() {
    console.log(this.val)
  }

}
