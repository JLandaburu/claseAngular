import { Component, OnInit } from '@angular/core';
import { Profesor } from './profesor';
import { PeticionesService } from '../app/services/peticiones.service';

@Component({
    selector: 'app-profesor',
    templateUrl: './profesor.component.html',
    providers: [PeticionesService]
})

export class ProfesorComponent{
    public nombre:string;
    public edad:number;
    public casado:boolean;
    public trabajos:Array<any> = ['Profesor', 'Webdev', 'Barrendero'];
    public profesor:Profesor;
    public profesorado:Array<Profesor>;
    public color:string;
    public admin:boolean; //para el button
    public api_posts; //posts que vienen de la api (no le indicamos el tipo que va a venir, no le indicamos tipo)

    constructor(
        private _peticionesService:PeticionesService
    ){
        this.nombre = 'Xabi';
        this.edad = 32;
        this.casado = false;
        this.profesor = new Profesor('Lucas',38,'Veterinaria',false);
        this.profesorado = [
            this.profesor,
            new Profesor('Vanesa',34,'Matemáticas',true),
            new Profesor('Ramiro',28,'Lenguaje',false)
        ];
        this.color = 'blue';
        this.admin = false;
    }

    ngOnInit(): void {
        this._peticionesService.getPosts().subscribe(
            res => {
                this.api_posts = res;
                if(!this.api_posts)
                    console.log("Respuesta vacía de la API"); //si no hay ningun valor que mostrar
            },
            error => {
                console.log(<any>error); //si hay error
            }
        );
        
    }

    pulsarBoton(): void {
        console.log("Hemos pulsado el boton");
        this.admin = !this.admin;
    }
}