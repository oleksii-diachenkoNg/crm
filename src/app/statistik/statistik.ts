import { Component, ElementRef, ViewChild, AfterViewInit, inject } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { StatistischeDataService } from '../services/StatistischeData.service';

Chart.register(...registerables);


@Component({
  selector: 'app-statistik',
  imports: [],
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

  monat: number = 0;
  statistischeDaten = inject(StatistischeDataService);
  chart!: Chart;

  ngAfterViewInit() {
    this.createBarChart();
    this.createLineChart();
    this.createDoughnutChart();
    this.monat = new Date().getMonth() + 1;
  }



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
