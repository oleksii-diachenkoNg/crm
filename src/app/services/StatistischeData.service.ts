import { Injectable, signal } from "@angular/core";
import { StatistischeDaten } from "../types/StatistischeDaten";

@Injectable({
  providedIn: 'root'
}) export class StatistischeDataService {
    private statistischeData = signal<Array<StatistischeDaten>>([
      {monat: 'Januar', profit: 1000},
      {monat: 'Februar', profit: 1900},
      {monat: 'März', profit: 1500},
      {monat: 'April', profit: 1240},
      {monat: 'Mai', profit: 1781},
      {monat: 'Jun', profit: 1000},
      {monat: 'Juli', profit: 1600},
      {monat: 'August', profit: 1100},
      {monat: 'September', profit: 3200},
      {monat: 'Oktober', profit: 2700},
      {monat: 'November', profit: 2320},
      {monat: 'Dezember', profit: 1000},
    ]);

    statistischeData_ = this.statistischeData.asReadonly();

    setData(data: StatistischeDaten) {
      //http request to get data from backend 
    }
}