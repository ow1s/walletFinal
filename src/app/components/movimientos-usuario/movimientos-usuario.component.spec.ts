import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosUsuarioComponent } from './movimientos-usuario.component';

describe('MovimientosUsuarioComponent', () => {
  let component: MovimientosUsuarioComponent;
  let fixture: ComponentFixture<MovimientosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
