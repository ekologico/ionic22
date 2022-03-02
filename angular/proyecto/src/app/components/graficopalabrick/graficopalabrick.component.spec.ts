import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficopalabrickComponent } from './graficopalabrick.component';

describe('GraficopalabrickComponent', () => {
  let component: GraficopalabrickComponent;
  let fixture: ComponentFixture<GraficopalabrickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficopalabrickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficopalabrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
