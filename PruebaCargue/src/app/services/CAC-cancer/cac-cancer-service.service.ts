import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'
import { Cancer } from 'src/app/models/cancer';

@Injectable({
  providedIn: 'root'
})
export class CACCancerServiceService {
  API_URI = keys.api.API_URI + '/cancer';

  constructor(private http: HttpClient) { }

  GuardarCancer(Cancer: Cancer) {
    console.log('si entra ruta');
    console.log(this.API_URI);
    return this.http.post(`${this.API_URI}/`, Cancer)
  }


}
