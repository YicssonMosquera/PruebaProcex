import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaArtritisComponent } from './cuenta-artritis.component';

describe('CuentaArtritisComponent', () => {
  let component: CuentaArtritisComponent;
  let fixture: ComponentFixture<CuentaArtritisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaArtritisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaArtritisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
