import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarHemofiliaComponent } from './cargar-hemofilia.component';

describe('CargarHemofiliaComponent', () => {
  let component: CargarHemofiliaComponent;
  let fixture: ComponentFixture<CargarHemofiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarHemofiliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarHemofiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
