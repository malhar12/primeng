import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';

@Component({
    templateUrl: './tableellipsisdemo.html',
    styles: [`
        .ui-g label {
          font-weight: bold;
          margin-top: .25em;
          display: block;
        }
  `]
})
export class TableEllipsisDemo implements OnInit {

    cars1: Car[];
    cars2: Car[];
    cols: any[];

    constructor(private carService:CarService) { }

    ngOnInit(){
      this.carService.getCarsMedium().then(cars => {
        this.cars1 = cars

        this.cars1[3].vin = '1ZVHT8-2H4851-13K456-67DSHJ-GHFW6G';
        this.cars1[0].brand = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
        this.cars1[0].color = 'Rechtsschutzversicherungsgesellschaften';
      });

      this.carService.getCarsSmall().then(cars => {
        this.cars2 = cars

        this.cars2[3].vin = '1ZVHT8-2H4851-13K456-67DSHJ-GHFW6G';
        this.cars2[0].brand = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
        this.cars2[0].color = 'Rechtsschutzversicherungsgesellschaften';
      });

      this.cols = [
          { field: 'vin', header: 'Vin' },
          { field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' }
      ];
    }
}
