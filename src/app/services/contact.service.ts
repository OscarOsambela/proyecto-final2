import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/interfaces/Contacto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS);
  }

  obtenerContactoPorId(id: number): Observable<IContacto> | any {
    const contacto = CONTACTOS.find(
      (contacto: IContacto) => contacto.id === id
    );

    let observable = new Observable((observer) =>
      //emitir un valor a todo componente suscrito
      {
        observer.next(contacto);
        //no emitimos valores
        observer.complete();
      }
    );
    if (contacto) {
      return observable;
    } else {
      return;
    }
  }
}
//Observable son parecidas a las promesas que van emitiendo valores. las promesas se resuelven una vez. los obs pueden actualizarse
