import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaCancerEditComponent } from './cuenta-cancer-edit.component';

describe('CuentaCancerEditComponent', () => {
  let component: CuentaCancerEditComponent;
  let fixture: ComponentFixture<CuentaCancerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaCancerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaCancerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
