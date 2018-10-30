import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {

  public color_seleccionado:string; //esta variable va cambiando segun lo que escribamos en la vista

  constructor() { 
    this.color_seleccionado = "red";    
  }

  ngOnInit() {
  }

}
