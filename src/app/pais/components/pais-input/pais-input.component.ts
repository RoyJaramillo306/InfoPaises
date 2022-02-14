import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onFiltro: EventEmitter<string> = new EventEmitter();

  @Input() placeholder:string = '';

  Filtro: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(){
    this.Filtro
      .pipe(
        debounceTime(300)
      )
      .subscribe( valor =>{
        this.onFiltro.emit(valor);
        console.log(valor);
      })
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  buscando(){
    
    this.Filtro.next(this.termino);
    
  }

}
