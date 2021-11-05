import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) { }

  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe( //Pipe para aplicar el filtro y solo enviar lo que se necesita
        map((dataRaw: any) => {
          return dataRaw.data //Mandar solo lo que esta dentro de DATA del json devuelto del API
        })
      )
  }

}
