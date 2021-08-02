import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaErcListarComponent } from './cuenta-erc-listar.component';

describe('CuentaErcListarComponent', () => {
  let component: CuentaErcListarComponent;
  let fixture: ComponentFixture<CuentaErcListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaErcListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaErcListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
