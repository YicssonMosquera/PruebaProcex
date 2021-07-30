import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaCancerActualizarComponent } from './cuenta-cancer-actualizar.component';

describe('CuentaCancerActualizarComponent', () => {
  let component: CuentaCancerActualizarComponent;
  let fixture: ComponentFixture<CuentaCancerActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaCancerActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaCancerActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
