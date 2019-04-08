import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ClothService {

  constructor(public http: Http) { }
  loadCloth(katid) {
    return this.http.get('http://localhost:8081/api/category/' + katid +'/cloth');
    }    

}
