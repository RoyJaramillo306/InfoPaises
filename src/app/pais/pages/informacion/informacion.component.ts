import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaisService } from '../../services/pais.service';
import { GifService } from '../../services/gif.service';

import { switchMap, tap } from 'rxjs/operators';

import { Empty } from '../../interfaces/pais.interfaces';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  pais!: Empty;
  public nombre: string = '';
  public resultados: Gif[] = [];


  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService, private gifService: GifService){}

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.informacionPais(id) ),
        tap( console.log )
      )
      .subscribe( pais =>{
        this.pais = pais;
        this.nombre = pais.name;
        this.gifService.buscarGif(this.nombre)
          .subscribe( resp =>{
            this.resultados = resp.data;
          })
      });

  }

}
