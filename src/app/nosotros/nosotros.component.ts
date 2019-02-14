import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../equipo.service';


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  equipo:any[] = [];

  constructor(private _servicios:EquipoService) {

    this.equipo = _servicios.obtenerEquipo();

   }


  ngOnInit() {
  }


}
