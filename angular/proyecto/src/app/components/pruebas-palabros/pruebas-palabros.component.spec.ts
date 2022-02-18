import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasPalabrosComponent } from './pruebas-palabros.component';

describe('PruebasPalabrosComponent', () => {
  let component: PruebasPalabrosComponent;
  let fixture: ComponentFixture<PruebasPalabrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasPalabrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasPalabrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
