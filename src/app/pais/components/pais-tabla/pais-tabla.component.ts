import { Component, Input } from '@angular/core';
import { Empty } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent{

  @Input() paises: Empty[] = [];

  constructor(){}

}
