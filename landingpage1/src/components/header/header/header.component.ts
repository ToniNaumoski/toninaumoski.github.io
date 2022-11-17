import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() page: string = '';
  items;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Mein Konto ',  routerLink: ['/register']},
      {separator: true},
      {label: 'Einstellung',routerLink: ['/register']},
      {separator: true},
      {label: 'Ausloggen',routerLink: ['/register']} 
    ];
  }

}
