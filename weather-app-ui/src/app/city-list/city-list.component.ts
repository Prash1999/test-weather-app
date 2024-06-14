import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  cities: any[] = [];
  newCityName: string = '';
  interval: number = 0;
  constructor(private cityService: CityService) { }
  ngOnInit(): void {
    this.loadCities();
  }
  loadCities() {
    this.cityService.getCities().subscribe(data => {
      this.cities = data;
    });
  }
  addCity() {
    this.cityService.addCity(this.newCityName).subscribe(() => {
      this.loadCities();
      this.newCityName = '';
    });
  }
  deleteCity(id: string) {
    this.cityService.deleteCity(id).subscribe(() => {
      this.loadCities();
    });
  }
  fetchWeather() {
    this.cityService.fetchWeather().subscribe(() => {
      this.loadCities();
      location.reload();
    });
  }

  changeInterval(){
    this.cityService.changeInterval(this.interval).subscribe((res) => {
      console.log(res);
      
      if(res.status === 200){
        alert("Interval updated successfully");
      }
    } )
  }
}