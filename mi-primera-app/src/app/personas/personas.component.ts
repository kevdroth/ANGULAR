import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})

export class personasComponent{
    deshabilitar = false;
    mensaje = "";
    titulo = "Ingeniero";
    mostrar = false;

    agregarPersona(){
        this.mostrar = true;
        this.mensaje = "Persona agregada";
    }

    /* modificarTitulo(event: Event){
        console.log("Entrando a metodo modificarTitulo");
        this.titulo = (<HTMLInputElement>event.target).value;
    } */
}