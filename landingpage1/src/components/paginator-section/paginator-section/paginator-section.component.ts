import { Component, OnInit, Input } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-paginator-section',
  templateUrl: './paginator-section.component.html',
  styleUrls: ['./paginator-section.component.scss']
})
export class PaginatorSectionComponent implements OnInit {

  @Input() paginationData;
  @Input() scrollPanel = null;
  @Input() headerData;
  @Input() data;

  rows = 10;
  first: number = 0;
  totalRecords: number;
  displayPages: number = 10;
  items = [];
  itemStart;
  itemsFinish;
  itemTitle = 'title';
  titleNumber = 1;

  constructor() {}

  addItems() {
    this.itemStart = this.first;
    this.itemsFinish = this.first + this.displayPages;
    if(this.itemsFinish > this.totalRecords) {
      this.itemsFinish = this.totalRecords;
    }
    let i;
    this.items = [];
    for (i = this.itemStart; i < this.itemsFinish; i++) {
      this.items.push(this.data[i]);
    }
  }

  ngOnInit(): void {
    this.totalRecords = this.data.length;
    this.addItems()
  }

  onPageChange(event) {
    this.first = event.first;
    this.addItems();
  }

}
