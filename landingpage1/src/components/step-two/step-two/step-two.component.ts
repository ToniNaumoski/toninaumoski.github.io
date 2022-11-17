import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from "../../../services/interaction/announcement/announcement.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 1;

  identificationForm: FormGroup;
  yesNo: number[] = [1, 0];
  hasAccount: number = 1;
  loading: boolean = false;

  constructor(private _announcementService: AnnouncementService) { }

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

    this._announcementService.announcementCostMessage$.subscribe(value => {
      console.log("Data from previous component: ");
      console.log(value);
    });

    this.identificationForm = new FormGroup({
      'hasAccount': new FormControl(this.hasAccount, Validators.required)
    });
  }

  changeIdentificationType(event: any) {
    this.hasAccount = event.target.value;
  }

  callNextComponent() {
    this.loading = true;
  }

}
