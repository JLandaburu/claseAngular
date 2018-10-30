import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutaComponent } from './fruta/fruta.component';
import { ProfesorComponent } from '../profesor/profesor.component';

const appRoutes:Routes = [
    {path: '', component: ProfesorComponent}, //ruta inicial
    {path: 'profesor', component: ProfesorComponent}, //cuando se pone /profesor se carga ProfesorComponent
    {path: 'fruta', component: FrutaComponent}, //cuando se pone /fruta se carga FrutaComponent
    {path: '**', component: FrutaComponent}, //ruta cuando falle, por defecto
];

export const appRoutingProviders : any[] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);