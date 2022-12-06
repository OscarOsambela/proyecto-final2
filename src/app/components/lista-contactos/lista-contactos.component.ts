import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/interfaces/Contacto.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit, OnDestroy {

  listaContacto: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  //succripcion de servicio
  suscription: Subscription | undefined;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contactService.obtenerContactos().then((lista: IContacto[]) => this.listaContacto = lista)
    .catch((error)=> alert(`Ha habido un error: ${error}`))
    .finally(()=> console.log('petición terminada'));
  }

  obtenerContacto(id: number){
    console.log(id);
    this.suscription = this.contactService.obtenerContactoPorId(id)?.subscribe((contacto: IContacto)=> this.contactoSeleccionado = contacto)
  }

  ngOnDestroy(): void{
    this.suscription?.unsubscribe();
  }


}
