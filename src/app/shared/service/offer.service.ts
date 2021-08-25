import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../model/offer-model';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  readonly baseUrl = 'https://public-offer-back-test.herokuapp.com/offer';

  constructor(private http: HttpClient  ) { }

  async getOffers(): Promise<Offer[]>{

    return this.http.get<Offer[]>(`${this.baseUrl}/main`).toPromise();

  }

  save(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(`${this.baseUrl}/main`, offer);
  }

  update(offer: Offer): Observable<Offer>{
    return this.http.put<Offer>(`${this.baseUrl}/main`, offer);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/main/${id}`);
  }

}
