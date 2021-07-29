import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaCancerListarComponent } from './cuenta-cancer-listar.component';

describe('CuentaCancerListarComponent', () => {
  let component: CuentaCancerListarComponent;
  let fixture: ComponentFixture<CuentaCancerListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaCancerListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaCancerListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
