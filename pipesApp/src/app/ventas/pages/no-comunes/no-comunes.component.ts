import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Kevin';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Roberto', 'Ricardo'];
  clientesMapa= {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    if (this.nombre === 'Kevin' && this.genero === 'masculino'){
      this.nombre = 'Susana';
      this.genero = 'femenino';
    }else{
      this.nombre = 'Kevin';
      this.genero = 'masculino';
    }
  }

  borrarCliente(){
    this.clientes.shift();
  }

  persona = {
    nombre: 'Kevin',
    edad: 29,
    direccion: 'Buenos Aires, Argentina'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  miObservable = interval(2000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 4000);
  });

}
