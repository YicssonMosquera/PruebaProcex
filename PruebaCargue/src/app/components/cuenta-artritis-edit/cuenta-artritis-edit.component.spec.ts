import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaArtritisEditComponent } from './cuenta-artritis-edit.component';

describe('CuentaArtritisEditComponent', () => {
  let component: CuentaArtritisEditComponent;
  let fixture: ComponentFixture<CuentaArtritisEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaArtritisEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaArtritisEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
