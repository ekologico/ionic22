import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})export class GraficoComponent implements OnInit {


  @Input() media!:number;
  @Input() maximo!:number;
  @Input() minimo!:number;
  


  lineChartData!: ChartConfiguration['data'];

  lineChartOptions: ChartConfiguration['options'];

  lineChartType: ChartType = 'bar';


  constructor() {
    /* this.media=5;
    this.maximo=5;
    this.minimo=5; */

   }

  
 
   actualizaGraficos (media:number, maximo:number, minimo:number)
   {
     //this.lineChartData.datasets[0].data = [this.media, this.maximo, this.minimo];
     this.lineChartData = {
      datasets: [
        {
          data: [ media,maximo,minimo],
          label: 'DATOS IMC',
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        }
      ],
      labels: [ 'MEDIA IMC', 'MAXIMO IMC', 'MINIMO IMC' ]
    };
   }

  ngOnInit(): void {

    this.actualizaGraficos(this.media, this.maximo, this.minimo);  
  
    this.lineChartOptions = {
      elements: {
        line: {
          tension: 0.5
        }
      },
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        x: {},
        'y-axis-0':
          {
            position: 'left',
          },
        'y-axis-1': {
          position: 'right',
          grid: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            color: 'red'
          }
        }
      },
  
      plugins: {
        legend: { display: true }
      }
    };
  }

  

  
 

  

}




