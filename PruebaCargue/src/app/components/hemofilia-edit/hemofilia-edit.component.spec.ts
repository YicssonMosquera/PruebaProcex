import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemofiliaEditComponent } from './hemofilia-edit.component';

describe('HemofiliaEditComponent', () => {
  let component: HemofiliaEditComponent;
  let fixture: ComponentFixture<HemofiliaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HemofiliaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HemofiliaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
