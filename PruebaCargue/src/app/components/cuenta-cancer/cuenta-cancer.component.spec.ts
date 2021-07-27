import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaCancerComponent } from './cuenta-cancer.component';

describe('CuentaCancerComponent', () => {
  let component: CuentaCancerComponent;
  let fixture: ComponentFixture<CuentaCancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaCancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaCancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
