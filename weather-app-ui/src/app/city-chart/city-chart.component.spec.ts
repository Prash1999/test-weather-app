import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityChartComponent } from './city-chart.component';

describe('CityChartComponent', () => {
  let component: CityChartComponent;
  let fixture: ComponentFixture<CityChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
