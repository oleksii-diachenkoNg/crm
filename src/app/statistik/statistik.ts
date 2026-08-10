import { Component, ElementRef, ViewChild, AfterViewInit, inject } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { StatistischeDataService } from '../services/StatistischeData.service';

import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

Chart.register(...registerables);


@Component({
  selector: 'app-statistik',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './statistik.html',
  styleUrl: './statistik.css',
})


export class Statistik implements AfterViewInit {
  @ViewChild('chartBarCanvas')
  chartBarCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartLineCanvas')
  chartLineCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartDoughnutCanvas')
  chartDoughnutCanvas!: ElementRef<HTMLCanvasElement>;

  statistischeDaten = inject(StatistischeDataService);
  chart!: Chart;

  ngAfterViewInit() {
    this.createBarChart();
    this.createLineChart();
    this.createDoughnutChart();
  }

  filterNach = 'monat';
  monate: Array<string> = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  jahre: Array<number> = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

  createBarChart() {

    this.chart = new Chart(
      this.chartBarCanvas.nativeElement,
      {
        type: 'bar',
        data: {
          labels: this.statistischeDaten.statistischeData_().map(data => data.monat),

          datasets: [
            {
              label: 'Verkäufe',
              backgroundColor: 'blue',
              data: this.statistischeDaten.statistischeData_().map(data => data.profit),
            }
          ]
        }
      }
    )
  }

  createLineChart() {

    this.chart = new Chart(
      this.chartLineCanvas.nativeElement,
      {
        type: 'line',
        data: {
          labels: this.statistischeDaten.statistischeData_().map(data => data.monat),

          datasets: [
            {
              label: 'Verkäufe',
              backgroundColor: 'blue',
              data: this.statistischeDaten.statistischeData_().map(data => data.profit),
            }
          ]
        }
      }
    )
  }

  createDoughnutChart() {

    this.chart = new Chart(
      this.chartDoughnutCanvas.nativeElement,
      {
        type: 'doughnut',
        data: {
          labels: this.statistischeDaten.statistischeData_().map(data => data.monat),

          datasets: [
            {
              data: this.statistischeDaten.statistischeData_().map(data => data.profit),
            } 
          ] 
        }
      }
    )
  }
}
