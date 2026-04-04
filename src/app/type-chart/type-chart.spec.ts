import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeChart } from './type-chart';

describe('TypeChart', () => {
  let component: TypeChart;
  let fixture: ComponentFixture<TypeChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeChart],
    }).compileComponents();

    fixture = TestBed.createComponent(TypeChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
