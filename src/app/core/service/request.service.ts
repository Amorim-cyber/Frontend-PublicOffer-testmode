import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Request } from "../model/Request";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private requestUrl: string = 'https://public-offer-back-test.herokuapp.com/'

  constructor(private httpClient: HttpClient){

  }

  getAll(): Observable<Request[]>{
    return this.httpClient.get<Request[]>(`${this.requestUrl}ofertaPublica/back`);
  }

  getAllByAgentId(agentId:number){
    return this.httpClient.get<Request[]>(`${this.requestUrl}ofertaPublica/back/${agentId}`);
  }

}
