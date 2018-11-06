import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from '@angular/core/src/render3/util';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';
import { verdura } from '../verduras/verdura';

@Injectable()

export class PeticionesService {
    public url:string;

    constructor(
        private _httpClient:HttpClient
    ){
        this.url = "https://jsonplaceholder.typicode.com/posts"; //para traer la informacion
    }

    getPrueba(){
        return 'Hola, soy un servicio!';
    }

    getPosts(): Observable<any> {
        return this._httpClient.get(this.url);
    }

    setVerdura(verdura:verdura):Observable<any>{
        let json = JSON.stringify(verdura);//pasamos un objeto a formato json
        let params = 'json = ' + json;
        let headers = new HttpHeaders().set('Content=type','application/json');
        return this._httpClient.post(this.url, params, {headers:headers}); 
    }
}