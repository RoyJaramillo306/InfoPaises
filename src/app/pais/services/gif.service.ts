import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifs, Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private apiKey: string = 'kheUdOo8NKGpDO7HiyVwOVtklJtMoJyI'; 
  private url: string = 'https://api.giphy.com/v1/gifs';

  public resultados: Gif[] = [];

  constructor( private http: HttpClient ){}

  buscarGif(query:string){

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('q',query)
      .set('limit','3');

    return this.http.get<SearchGifs>(`${this.url}/search`,{ params });

  }

}
