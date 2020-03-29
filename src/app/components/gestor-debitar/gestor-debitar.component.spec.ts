import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorDebitarComponent } from './gestor-debitar.component';

describe('GestorDebitarComponent', () => {
  let component: GestorDebitarComponent;
  let fixture: ComponentFixture<GestorDebitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestorDebitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorDebitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
