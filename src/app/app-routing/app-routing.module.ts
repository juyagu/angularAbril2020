import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';


import { ListadoComponent } from './../componentes/listado/listado.component';
import { DetalleComponent } from './../componentes/detalle/detalle.component';
import { EstadisticasComponent } from './../componentes/estadisticas/estadisticas.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: 'home', component:ListadoComponent },
    { path: 'detalle/:id', component: DetalleComponent },
    { path: 'estadisticas', component: EstadisticasComponent},
    { path: 'nueva', component: DetalleComponent }
]

@NgModule({
    declarations:[],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}