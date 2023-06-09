import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto5TableComponent } from './punto5-table.component';

describe('Punto5TableComponent', () => {
  let component: Punto5TableComponent;
  let fixture: ComponentFixture<Punto5TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto5TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto5TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
