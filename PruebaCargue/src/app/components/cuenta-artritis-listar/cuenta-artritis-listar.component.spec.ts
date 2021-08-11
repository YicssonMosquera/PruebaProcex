import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaArtritisListarComponent } from './cuenta-artritis-listar.component';

describe('CuentaArtritisListarComponent', () => {
  let component: CuentaArtritisListarComponent;
  let fixture: ComponentFixture<CuentaArtritisListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaArtritisListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaArtritisListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
