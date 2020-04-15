import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenvalidadoComponent } from './drivenvalidado.component';

describe('DrivenvalidadoComponent', () => {
  let component: DrivenvalidadoComponent;
  let fixture: ComponentFixture<DrivenvalidadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivenvalidadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivenvalidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
