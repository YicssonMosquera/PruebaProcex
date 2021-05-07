import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemofiliaSoportesComponent } from './hemofilia-soportes.component';

describe('HemofiliaSoportesComponent', () => {
  let component: HemofiliaSoportesComponent;
  let fixture: ComponentFixture<HemofiliaSoportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HemofiliaSoportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HemofiliaSoportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
