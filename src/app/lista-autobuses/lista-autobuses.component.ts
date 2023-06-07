import { Component } from '@angular/core';
import { AutobusesService } from '../services/autobuses.service';
import { Autobus } from '../model/autobus.interface';

@Component({
  selector: 'app-lista-autobuses',
  templateUrl: './lista-autobuses.component.html',
  styleUrls: ['./lista-autobuses.component.css']
})
export class ListaAutobusesComponent {

  autobuses:Autobus[] = [];
  constructor(private autobusService:AutobusesService) {
    this.autobusService.getAutobuses().subscribe(
      (data:Autobus[]) => {
        this.autobuses = data;
      }
    )
   }

}
