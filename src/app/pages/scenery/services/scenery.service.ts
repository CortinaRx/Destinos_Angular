import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SceneryService {
public sceneryURL: string = "https://destiny-api-s.vercel.app/api/scenerys"
  constructor(private httpClient: HttpClient) { }

  public getAllScenerys(){
    return this.httpClient.get(this.sceneryURL)
  }

  public getScenery(idScenery: any) {
    return this.httpClient.get(`${this.sceneryURL}/${idScenery}`)
  }

}
