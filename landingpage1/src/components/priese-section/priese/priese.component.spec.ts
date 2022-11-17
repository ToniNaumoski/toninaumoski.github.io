import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrieseComponent } from './priese.component';

describe('PrieseComponent', () => {
  let component: PrieseComponent;
  let fixture: ComponentFixture<PrieseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrieseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrieseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
