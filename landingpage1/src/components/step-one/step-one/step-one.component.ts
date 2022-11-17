import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from "../../../services/interaction/announcement/announcement.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AnnouncementCost} from "../../../models/AnnouncementCost";
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

  items: MenuItem[];
  activeIndex: number = 0;
  // my items added

  costForm: FormGroup;
  loading: boolean = false;
  workingHours: number = 1;
  numberOfHelpers: number = 1;
  hoursPerDay: number = 10;
  hourlyWorkersRate: number = 10;
  twoHourWorkerRate: number = 25;

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


    let costDetails = localStorage.getItem("fees-step-1");

    if (costDetails) {
      let cost = <AnnouncementCost>JSON.parse(costDetails);
      console.log("restored cost data");
      console.log(cost);
      this.workingHours = cost["working_hours"];
      this.numberOfHelpers = cost["helper_number"];
    }

    this.costForm = new FormGroup({
      'numberOfHelpers': new FormControl(this.numberOfHelpers, [
        Validators.required,
        Validators.min(1),
        Validators.max(250)
      ]),
      'workingHours': new FormControl(this.workingHours, [
        Validators.required,
        Validators.min(1),
        Validators.max(7200)
      ])
    });
  }

  totalCost(): number {
    return this.totalWorkersFees() + this.totalServiceFees();
  }

  totalWorkersFees(): number {
    if (this.costForm.value.workingHours <= 2) {
      return this.costForm.value.numberOfHelpers * this.twoHourWorkerRate;
    }
    let fees = this.costForm.value.workingHours * this.numberOfHelpers * this.hourlyWorkersRate;
    return parseFloat(fees.toFixed(2));
  }

  totalServiceFees(): number {
    let fees = this.costForm.value.numberOfHelpers * this.pricePerHour() * this.numberOfDays();
    return parseFloat(fees.toFixed(2));
  }

  pricePerHour(): number {
    return Math.max(this.hoursPerDay, 20 - this.costForm.value.numberOfHelpers);
  }

  numberOfDays(): number {
    return Math.max(1, (this.costForm.value.workingHours / this.hoursPerDay));
  }

  callNextComponent() {
    console.log("callNextComponent() ");

    this.loading = true;
    let costDetails = new AnnouncementCost(
      this.costForm.value.numberOfHelpers,
      this.costForm.value.workingHours,
      this.totalCost(),
      this.totalWorkersFees(),
      this.totalServiceFees(),
    );

    console.log(typeof costDetails)
    localStorage.setItem('fees-step-1', JSON.stringify(costDetails));

    console.log(costDetails);
    console.log("Data emitted ");
    this._announcementService.emitAnnouncementCost(costDetails);
    this.loading = false;
  }

}
