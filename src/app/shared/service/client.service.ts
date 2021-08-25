import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/client-model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly baseUrl = 'https://public-offer-back-test.herokuapp.com/offer';

  constructor(private http: HttpClient ) { }

  async getClientById(code:number): Promise<Client[]>{

    return this.http.get<Client[]>(`${this.baseUrl}/client/search/${code}`).toPromise();

  }


}
