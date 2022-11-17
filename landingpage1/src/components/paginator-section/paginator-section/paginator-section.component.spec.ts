import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorSectionComponent } from './paginator-section.component';

describe('PaginatorSectionComponent', () => {
  let component: PaginatorSectionComponent;
  let fixture: ComponentFixture<PaginatorSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
