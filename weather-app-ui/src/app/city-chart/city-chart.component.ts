import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
@Component({
  selector: 'app-city-chart',
  templateUrl: './city-chart.component.html',
  styleUrls: ['./city-chart.component.scss']
})
export class CityChartComponent implements OnInit {
  cities: any[] = [];
  chart: any;
  chartCreated: boolean = false; // Add a flag to check if the chart has been created
  constructor(private cityService: CityService) { }
  ngOnInit(): void {
    Chart.register(...registerables); // Register all necessary components
    this.loadCities();
  }
  loadCities() {
    this.cityService.getCities().subscribe(data => {
      console.log(data);
      
      this.cities = data;
      if (!this.chartCreated) { // Only create the chart if it hasn't been created yet
        this.createChart();
        this.chartCreated = true;
      } else {
        this.updateChart();
      }
    });
  }
  createChart() {
    const datasets = this.cities.map(city => ({
      label: city.name,
      data: city.temperatures.map((t:any) => ({ x: new Date(t.time), y: t.temp })),
      fill: false,
      borderColor: this.getRandomColor()
    }));
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        datasets
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'hour'
            }
          },
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }
  updateChart() {
    this.chart.data.datasets = this.cities.map(city => ({
      label: city.name,
      data: city.temperatures.map((t: any) => ({ x: new Date(t.time), y: t.temp })),
      fill: false,
      borderColor: this.getRandomColor()
    }));
    this.chart.update(); // Update the chart with new data
  }
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}