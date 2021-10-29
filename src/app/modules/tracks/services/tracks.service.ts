import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  private readonly URL = environment.api

  constructor(private http: HttpClient) {

  }
  /*
  * Respuesta de API
  * {data:[..1, ..2, ..3]}
  * 
  */

  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe( //Pipe para aplicar el filtro y solo enviar lo que se necesita
        map((dataRaw: any) => {
          return dataRaw.data //Mandar solo lo que esta dentro de DATA del json devuelto del API
        })
      )
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe( //Pipe para aplicar el filtro y solo enviar lo que se necesita
        map((dataRaw: any) => {
          return dataRaw.data.reverse() //Mandar los datos de forma reversa para aparentar que estan random
        }),
        // map((dataRevertida) => {
        //   return dataRevertida.filter((track: TrackModel) => track._id != 1) //Aplicando un filtro para quitar cancion con ID = 1
        // })
        catchError((err => { /* Capturar el error en caso de que se presente */
          console.log("Revisa el error 🔴🔴", err);
          return of([]) //Regresar array vacio
        })
        )
      )
  }

}
