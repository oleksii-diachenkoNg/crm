import { Injectable, signal } from "@angular/core";
import { StatistischeDaten } from "../types/StatistischeDaten";

@Injectable({
  providedIn: 'root'
}) export class StatistischeDataService {
    private statistischeData = signal<Array<StatistischeDaten>>([]);

    statistischeData_ = this.statistischeData.asReadonly();

    setData(data: StatistischeDaten) {
      this.statistischeData.update((alteDaten) => [...alteDaten, data]);
    }
}