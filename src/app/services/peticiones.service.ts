import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class PeticionesService {
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = "https://jsonplaceholder.typicode.com/posts"; //para traer la informacion
    }

    getPrueba(){
        return 'Hola, soy un servicio!';
    }

    getPosts(): Observable<any> {
        return this._http.get(this.url);
    }
}