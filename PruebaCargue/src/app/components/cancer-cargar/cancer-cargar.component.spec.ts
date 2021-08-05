import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerCargarComponent } from './cancer-cargar.component';

describe('CancerCargarComponent', () => {
  let component: CancerCargarComponent;
  let fixture: ComponentFixture<CancerCargarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancerCargarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerCargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
