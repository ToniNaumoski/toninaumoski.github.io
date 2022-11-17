import { Component, OnInit, Input } from '@angular/core';
import {CardOneInterface} from './../../../models/CardOne';
import {CardTwoInterface} from './../../../models/CardTwo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardNumber: number = null;
  // card one data to be added 
  @Input() cardOneData: CardOneInterface = null;
  // card two data to be added
  @Input() cardTwoData: CardTwoInterface = null;


  constructor() { }

  ngOnInit() {

  }

}
