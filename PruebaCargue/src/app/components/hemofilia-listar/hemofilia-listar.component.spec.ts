import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemofiliaListarComponent } from './hemofilia-listar.component';

describe('HemofiliaListarComponent', () => {
  let component: HemofiliaListarComponent;
  let fixture: ComponentFixture<HemofiliaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HemofiliaListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HemofiliaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
