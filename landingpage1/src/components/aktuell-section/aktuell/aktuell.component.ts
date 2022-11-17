import { Component, OnInit, Input } from '@angular/core';
import {CardOneInterface} from './../../../models/CardOne';

@Component({
  selector: 'app-aktuell',
  templateUrl: './aktuell.component.html',
  styleUrls: ['./aktuell.component.scss']
})
export class AktuellComponent implements OnInit {
  @Input() cardOneData: CardOneInterface = null;

  constructor() { }

  ngOnInit(): void {
  }

}
