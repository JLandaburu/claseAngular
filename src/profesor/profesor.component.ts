import { Component, OnInit } from '@angular/core';
import { Profesor } from './profesor';

@Component({
    selector: 'app-profesor',
    templateUrl: './profesor.component.html'
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

    constructor(){
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
        window.console.log(this.profesor);
    }

    pulsarBoton(): void {
        console.log("Hemos pulsado el boton");
        this.admin = !this.admin;
    }
}