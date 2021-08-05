import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerEditComponent } from './cancer-edit.component';

describe('CancerEditComponent', () => {
  let component: CancerEditComponent;
  let fixture: ComponentFixture<CancerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
