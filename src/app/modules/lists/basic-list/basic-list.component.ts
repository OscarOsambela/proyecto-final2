import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/models/producto.model';



@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css'],
})
export class BasicListComponent implements OnInit {
  cargando: boolean = false;
  listaElementos: Producto[] = [
    { nombre: 'leche', precio: 20, description: 'producto' },
    { nombre: 'carne', precio: 40, description: 'producto' },
    { nombre: 'verdura', precio: 10, description: 'producto' },
    { nombre: 'huevos', precio: 25, description: 'producto' },
  ];
  opcion: number = 0;

  constructor() {}

  ngOnInit(): void {}

  cambiarCargando() {
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida: number){
    this.opcion = opcionEscogida;
  }
}
