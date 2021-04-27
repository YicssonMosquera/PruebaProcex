import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemofiliaFormularioComponent } from './hemofilia-formulario.component';

describe('HemofiliaFormularioComponent', () => {
  let component: HemofiliaFormularioComponent;
  let fixture: ComponentFixture<HemofiliaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HemofiliaFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HemofiliaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
