import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorIndexComponent } from './gestor-index.component';

describe('GestorIndexComponent', () => {
  let component: GestorIndexComponent;
  let fixture: ComponentFixture<GestorIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestorIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
