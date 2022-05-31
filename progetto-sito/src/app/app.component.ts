import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stazioni } from './stazioni.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progetto-sito';

  dataFrame: Observable<Stazioni[]>| undefined;
  dati:Stazioni[] = undefined!;

  constructor(private http: HttpClient){
  
  }

  find(station : HTMLInputElement){
    let m = station.value;
    this.dataFrame = this.http.get<Stazioni[]>("https://5000-enxo14-khaled-jsclg1ho9e5.ws-eu46.gitpod.io/" + "name/" + m);
    this.dataFrame.subscribe(this.fati)
  }

  fati = (datan: Stazioni[]) => {
    this.dati = datan;
    console.log(datan);
  }
  
}
