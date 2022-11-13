import { Component, OnInit } from "@angular/core";
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { Chart,Color } from 'chart.js';
@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chartColors: any[] = [
    { 
      backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2"] 
    }];
 
  // Doughnut
  public doughnutChartLabels: string[] = [ 'IAAS', 'PAAS' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 10, 5, 0 ], label: 'Series A' },
      
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  //bar chart
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Total', 'IAAS', 'PAAS', 'NATIVE' ],
    datasets: [
      { data: [ 10, 5, 4, 4], label: 'Total Proposals1', stack: 'a' },
      { data: [ 5, 0, 2, 2], label: 'Total Proposals2' , stack: 'a'}
      
      
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  // //cloud native it outcomes
  public barChartLegend1 = true;
  public barChartPlugins1 = [];

  public barChartData1: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Scalability', 'Reliability', 'Technology Replacement' ],
    datasets: [
      { data: [ 25, 40, 35], label: 'IT Outcomes', stack: 'a' }
      
      
    ]
  };

  

  public barChartOptions1: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

 //bar chart
 public barChartLegend2 = true;
 public barChartPlugins2 = [];

 public barChartData2: ChartConfiguration<'bar'>['data'] = {
   labels: [ 'Cluster 1 ', 'Cluster 2', 'Cluster 3', 'Cluster 4' ],
   datasets: [
     { data: [ 0, 3, 10, 0], label: 'Total Applications', stack: 'a' },
     { data: [ 0, 3, 0, 0], label: 'Cloud Native Applications' , stack: 'a'}
     
     
   ]
 };

 public barChartOptions2: ChartConfiguration<'bar'>['options'] = {
   responsive: false,
 };

  //bar chart
  public barChartLegend3 = true;
  public barChartPlugins3 = [];
 
  public barChartData3: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr','may', 'jun', 'july', 'aug','sep', 'oct', 'nov', 'dec' ],
    datasets: [
      { data: [ 0, 0, 0, 0,0, 0, 0, 0,11, 0, 0, 0], label: 'Monolithic', stack: 'a' },
      { data: [ 0, 0, 0, 0,0, 0, 0, 0,2, 0, 0, 0], label: 'Microservices' , stack: 'a'},
      { data: [ 0, 0, 0, 0,0, 0, 0, 0,0, 0, 0, 0], label: 'Containers' , stack: 'a'}
      
      
    ]
  };
 
  public barChartOptions3: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

//line chart scatter

chart: any;

  ngAfterViewInit() {
    let ctx: any = document.getElementById('lineChart') as HTMLElement;
    var data = {
      labels: ['Level 0', 'Level 1', 'Level 2', 'Level 3', 'Level 4'],
      datasets: [
        {
          label: 'WBA',
          data: [10, 50, 25, 70, 40],
          backgroundColor: 'blue',
          borderColor: 'blue',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'SAS',
          data: [20, 35, 40, 60, 50],
          backgroundColor: 'green',
          borderColor: 'green',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        
      ],
    };
    var options = {
      responsive: true,
      title: {
        display: true,
        position: 'top',
        text: 'Line Graph',
        fontSize: 18,
        fontColor: '#111',
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#333',
          fontSize: 16,
        },
      },
    };

    var chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }
//line chart scatter end
  
  
  constructor() {}

  ngOnInit() {
    
    }

   
}
