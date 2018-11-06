import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute} from '@angular/router';
import { verdura } from './verdura';
import { PeticionesService } from '../services/peticiones.service' 

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.component.html',
  styleUrls: ['./verduras.component.css'],
  providers: [PeticionesService]
})
export class VerdurasComponent implements OnInit {

  public formNombre:string;
  public formPrecios:string;
  public formDescripcion:string;
  public formGuardar:string;
  public verdura:verdura;


  constructor(
    private _peticionesService:PeticionesService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.formNombre = 'Nombre de la verdura';
    this.formPrecios = 'Indique el precio';
    this.formDescripcion = 'Descripcion de la verdura';
    this.formGuardar = 'Guardar verdura';
    this.verdura = new verdura('', 0, '');
  }

  ngOnInit() {
  }

  redirigir(){
    this._router.navigate(['/profesor', 'asdf']);
  }

  guardarForm(){
    console.log(this.verdura);
    this._peticionesService.setVerdura(this.verdura).subscribe(
      res => {
          console.log(res);
          this._router.navigate(['/profesor', 'asdf']);
      },
      error => {
          console.log(<any>error);
      }
    );
  }

}