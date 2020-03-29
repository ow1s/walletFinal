import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorAcreditarComponent } from './gestor-acreditar.component';

describe('GestorAcreditarComponent', () => {
  let component: GestorAcreditarComponent;
  let fixture: ComponentFixture<GestorAcreditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestorAcreditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorAcreditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
