import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.scss']
})
export class StepFiveComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
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

}
