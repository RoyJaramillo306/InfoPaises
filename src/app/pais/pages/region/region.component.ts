import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Empty, Languages } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent{

  public regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public paises: Empty[] = [];
  public regionActiva: string = '';
  public idiomas: string[] = ['english','spanish','quechua','portugues','franche','italian'];
  public idiomaActivo: string = '';
  public paisesFiltro: Empty[] = [];
  public i: number = 0;

 

  constructor( private paisService: PaisService ) { }

  activarRegion(region:string){

    this.regionActiva = region;
    this.idiomaActivo = '';

    this.paisService.buscarRegion(this.regionActiva)
      .subscribe( (resp) =>{
        this.paises = resp;
      });

  }

  getRegion(region:string){
    return (this.regionActiva === region) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  getIdioma(idioma:string){
    return (this.idiomaActivo === idioma) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarIdiomas(termino:string){

    console.log(this.paises);
    this.paisesFiltro = [];
    this.idiomaActivo = termino;

    if (this.idiomaActivo === 'english') {
      this.paises.forEach(lista => {
        this.i++;
        if (lista.languages.eng) {
          this.paisesFiltro.push(this.paises[this.i-1]);
        }
      });
      console.log(this.paisesFiltro);
      console.log(this.idiomaActivo);
    }

    if (this.idiomaActivo === 'spanish') {
      this.paises.forEach(lista => {
        this.i++;
        if (lista.languages.spa) {
          this.paisesFiltro.push(this.paises[this.i-1]);
        }
      });
      console.log(this.paisesFiltro);
      console.log(this.idiomaActivo);
    }

    if (this.idiomaActivo === 'quechua') {
      this.paises.forEach(lista => {
        this.i++;
        if (lista.languages.que) {
          this.paisesFiltro.push(this.paises[this.i-1]);
        }
      });
      console.log(this.paisesFiltro);
      console.log(this.idiomaActivo);
    }

    if (this.idiomaActivo === 'portugues') {
      this.paises.forEach(lista => {
        this.i++;
        if (lista.languages.por) {
          this.paisesFiltro.push(this.paises[this.i-1]);
        }
      });
      console.log(this.paisesFiltro);
      console.log(this.idiomaActivo);
    }

    if (this.idiomaActivo === 'franche') {
      this.paises.forEach(lista => {
        this.i++;
        if (lista.languages.fra) {
          this.paisesFiltro.push(this.paises[this.i-1]);
        }
      });
      console.log(this.paisesFiltro);
      console.log(this.idiomaActivo);
    }

    if (this.idiomaActivo === 'italian') {
      this.paises.forEach(lista => {
        this.i++;
        if (lista.languages.ita) {
          this.paisesFiltro.push(this.paises[this.i-1]);
        }
      });
      console.log(this.paisesFiltro);
      console.log(this.idiomaActivo);
    }

    this.i = 0;

  }

}
