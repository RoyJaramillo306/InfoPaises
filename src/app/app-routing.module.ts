import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapitalComponent } from './pais/pages/capital/capital.component';
import { InformacionComponent } from './pais/pages/informacion/informacion.component';
import { PaisComponent } from './pais/pages/pais/pais.component';
import { RegionComponent } from './pais/pages/region/region.component';

const routes: Routes = [
    { path: '', component: PaisComponent, pathMatch: 'full' },
    { path: 'capital', component: CapitalComponent },
    { path: 'region', component: RegionComponent },
    { path: 'pais/:id', component: InformacionComponent },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}