import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaErcEditComponent } from './cuenta-erc-edit.component';

describe('CuentaErcEditComponent', () => {
  let component: CuentaErcEditComponent;
  let fixture: ComponentFixture<CuentaErcEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaErcEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaErcEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
