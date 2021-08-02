import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaErcComponent } from './cuenta-erc.component';

describe('CuentaErcComponent', () => {
  let component: CuentaErcComponent;
  let fixture: ComponentFixture<CuentaErcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaErcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaErcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
