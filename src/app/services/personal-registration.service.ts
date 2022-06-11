import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonalRegistrationService {

  baseUrl = "https://pruebaangular-226da-default-rtdb.firebaseio.com";

  constructor(private httpClient: HttpClient) { }

  savePersonalRegistration(data:any) {
    return this.httpClient.post<any>(`${this.baseUrl}/datos.json`,data).pipe(
      map(result => {
        return result;
      })
    );
  }
  getMunicipies() {
    return this.httpClient.get<any>(`${this.baseUrl}/municipios.json`).pipe(
      map(result => {
        return result;
      })
    );
  }
  getTypeDocument() {
    return this.httpClient.get<any>(`${this.baseUrl}/tipoDocumento.json`).pipe(
      map(result => {
        return result;
      })
    );
  }
}
