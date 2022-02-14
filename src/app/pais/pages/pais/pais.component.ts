import { Component } from '@angular/core';
import { Empty } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})

export class PaisComponent{

  public termino: string = '';
  public paises: Empty[] = [];
  public hayError: boolean = false;
  public listado: Empty[] = [];
  public mostrar: boolean = false;

  constructor(private paisService: PaisService){}

  buscar(termino:string){

    this.hayError = false; 
    this.termino = termino;
    this.mostrar = false;

    this.paisService.buscarPais(this.termino)
      .subscribe( resp =>{
        this.paises = resp;
        console.log(this.paises);
      }, err =>{
        this.hayError = true;
        this.paises = []; 
      })

  }

  sugerencias( sugerencia: string){
    this.hayError = false;
    this.termino = sugerencia;
    this.mostrar = true;
    this.paisService.buscarPais(sugerencia)
      .subscribe( resp =>{
        this.listado = resp.splice(0,5);
      }, err => {
        this.listado = []; 
      })
  }

  mostrarSugerencia(termino:string){
    this.buscar(termino);
  }

}
