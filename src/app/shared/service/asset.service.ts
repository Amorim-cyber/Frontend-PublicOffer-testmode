import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asset } from '../model/asset-model';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  readonly baseUrl = 'https://public-offer-back-test.herokuapp.com/offer';

  constructor(private http: HttpClient) { }

  async getAssets(): Promise<Asset[]>{

    return this.http.get<Asset[]>(`${this.baseUrl}/asset`).toPromise();

  }

  async getAssetList(): Promise<String[]>{

    return this.http.get<String[]>(`${this.baseUrl}/asset/list`).toPromise();

  }

  async getAssetByShortName(shortName:string): Promise<Asset[]>{

    return this.http.get<Asset[]>(`${this.baseUrl}/asset/search/${shortName}`).toPromise();

  }

}
