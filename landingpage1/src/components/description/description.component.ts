import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AnnouncementService} from "../../services/interaction/announcement/announcement.service";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  descriptionForm: FormGroup;
  loading: boolean = true;

  constructor(private _announcementService: AnnouncementService) {
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('fees'));
    this._announcementService.publisherDataMessage$.subscribe(value => {
      console.log("Data from previous component: ");
      console.log(value);
    });

    this.descriptionForm = new FormGroup({
      'hasAccount': new FormControl('', Validators.required)
    });
  }

  changeIdentificationType(event: any) {

  }

  callNextComponent() {
    this.loading = true;
  }

}
