import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerFrmComponent } from './cancer-frm.component';

describe('CancerFrmComponent', () => {
  let component: CancerFrmComponent;
  let fixture: ComponentFixture<CancerFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancerFrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
