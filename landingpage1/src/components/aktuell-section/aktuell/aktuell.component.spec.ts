import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktuellComponent } from './aktuell.component';

describe('AktuellComponent', () => {
  let component: AktuellComponent;
  let fixture: ComponentFixture<AktuellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktuellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktuellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
