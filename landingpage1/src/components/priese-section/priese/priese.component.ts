import { Component, OnInit, Input } from '@angular/core';
import {CardTwoInterface} from './../../../models/CardTwo';
@Component({
  selector: 'app-priese',
  templateUrl: './priese.component.html',
  styleUrls: ['./priese.component.scss']
})
export class PrieseComponent implements OnInit {
  @Input() cardTwoData: CardTwoInterface = null;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cardTwoData)
  }

}
