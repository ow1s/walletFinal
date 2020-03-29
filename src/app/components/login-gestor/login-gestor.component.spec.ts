import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGestorComponent } from './login-gestor.component';

describe('LoginGestorComponent', () => {
  let component: LoginGestorComponent;
  let fixture: ComponentFixture<LoginGestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
