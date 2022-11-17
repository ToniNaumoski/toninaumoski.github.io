import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from "../../services/interaction/announcement/announcement.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  identificationForm: FormGroup;
  yesNo: number[] = [1, 0];
  hasAccount: number = 1;
  loading: boolean = false;

  constructor(private _announcementService: AnnouncementService) {
  }

  ngOnInit(): void {

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
