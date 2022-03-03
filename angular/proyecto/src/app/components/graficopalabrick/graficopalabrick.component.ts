import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DatoEstadistica } from 'src/app/models/datoEstadistica';


@Component({
  selector: 'app-graficopalabrick',
  templateUrl: './graficopalabrick.component.html',
  styleUrls: ['./graficopalabrick.component.css']
})
export class GraficopalabrickComponent implements OnInit {


  @Input() media!: number;
  @Input() maximo!: number;
  @Input() minimo!: number;
  @Input() array_bruto_datos!: Array<DatoEstadistica>;



  lineChartData!: ChartConfiguration['data'];

  lineChartOptions: ChartConfiguration['options'];

  lineChartType: ChartType = 'line';
  ejeX: Array<string>;
  ejeY: Array<number>;
  datos: Array<number>;


  constructor() {
    /* this.media=5;
    this.maximo=5;
    this.minimo=5; */





  }



  actualizaGraficos(ejeX: Array<string>, ejeY: Array<number>, datos: Array<number>) {
    //this.lineChartData.datasets[0].data = [this.media, this.maximo, this.minimo];
    this.lineChartData = {
      datasets: [
        {
          data: datos,
          label: 'Aciertos por ronda',
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        }
      ],
      labels: ejeX
    };
  }

  ngOnInit(): void {

    this.filtarDatos();


    this.actualizaGraficos(this.ejeX, this.ejeY, this.datos);

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



  filtarDatos(): void {
    //array_bruto_datos



    this.datos = [1, 2, 3, 4, 5, 6, 6, 6, 4, 3];
    this.ejeY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.ejeX = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];




    let i = 0;
    for (let partida of this.array_bruto_datos) {
      i++

      if (i < 100) {


        this.datos.push(partida.resultado);
        this.ejeX.push(i.toString());

      }

    }




  }




}

