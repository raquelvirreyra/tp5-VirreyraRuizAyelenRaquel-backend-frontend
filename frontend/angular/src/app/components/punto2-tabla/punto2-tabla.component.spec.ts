import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2TablaComponent } from './punto2-tabla.component';

describe('Punto2TablaComponent', () => {
  let component: Punto2TablaComponent;
  let fixture: ComponentFixture<Punto2TablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto2TablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto2TablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
