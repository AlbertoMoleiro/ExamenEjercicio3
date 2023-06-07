import { Component } from '@angular/core';
import { AutobusesService } from '../services/autobuses.service';
import { Autobus } from '../model/autobus.interface';

@Component({
  selector: 'app-lista-autobuses',
  templateUrl: './lista-autobuses.component.html',
  styleUrls: ['./lista-autobuses.component.css']
})
export class ListaAutobusesComponent {

  autobus:Autobus={matricula:'',aFabricacion:0,visitas:[]};
  constructor(private autobusService:AutobusesService) {
   this.autobusService.getAutobus('12345AA').subscribe(
      data => {
        this.autobus = data;
      });
   }

}
