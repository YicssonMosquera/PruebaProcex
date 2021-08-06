import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerSoporteComponent } from './cancer-soporte.component';

describe('CancerSoporteComponent', () => {
  let component: CancerSoporteComponent;
  let fixture: ComponentFixture<CancerSoporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancerSoporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
