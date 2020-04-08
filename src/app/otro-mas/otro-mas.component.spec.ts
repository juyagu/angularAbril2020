import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroMasComponent } from './otro-mas.component';

describe('OtroMasComponent', () => {
  let component: OtroMasComponent;
  let fixture: ComponentFixture<OtroMasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtroMasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtroMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
