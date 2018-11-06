import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutaComponent } from './fruta/fruta.component';
import { ProfesorComponent } from '../profesor/profesor.component';
import { VerdurasComponent } from './verduras/verduras.component';
import { Profesor } from "src/profesor/profesor";

const appRoutes:Routes = [
    {path: '', component: ProfesorComponent}, //ruta inicial
    {path: 'profesor', component: ProfesorComponent}, //cuando se pone /profesor se carga ProfesorComponent
    {path: 'profesor/:nombre', component:ProfesorComponent},
    {path: 'fruta', component: FrutaComponent}, //cuando se pone /fruta se carga FrutaComponent
    {path: 'verduras', component: VerdurasComponent},
    {path: '**', component: FrutaComponent}, //ruta cuando falle, por defecto
];

export const appRoutingProviders : any[] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);