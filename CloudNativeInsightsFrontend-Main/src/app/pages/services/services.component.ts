import { Component, OnInit } from '@angular/core';

import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { Chart } from 'chart.js';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public barChartLegend3 = true;
  public barChartPlugins3 = [];
 
  public barChartData3: ChartConfiguration<'bar'>['data'] = {
     labels: [ 'AI + ML','Analytics',"Compute_Containers" ,'Databases','Developer Tools','DevOps','Hybrid + Multicloud','Integration' , 'IOT','Management + Governance', 'Media','Migration', 'Mobile','Networking','Security','Storage','web'],
    datasets: [
      { data: [ 5,8,8,7,1,1,1,5,2,5,0,1,2,14,5,3,1], label: 'WBA', stack: 'a' },
      { data: [ 9,11,48,33,0,4,0,7,0,5,0,0,2,22,13,24,0], label: 'SAS', stack: 'a' },
      { data: [ 25,34,39,36,13,21,4,34,13,39,2,17,10,39,37,39,16], label: 'Total Azure Services', stack: 'a' },
      
      
    ]
  };


  public barChartOptions3: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

   //bar chart
 public barChartLegend2 = true;
 public barChartPlugins2 = [];

 public barChartData2: ChartConfiguration<'bar'>['data'] = {
   labels: [ 'BFSI', 'Manufacturing', 'TTH', 'Retail' ],
   datasets: [
     { data: [ 10, 23, 18, 16], label: 'AI', stack: 'a' },
     { data: [ 50, 49, 37, 54], label: 'Compute' , stack: 'a'},
     { data: [ 50, 49, 37, 54], label: 'Database' , stack: 'a'}
     
     
   ]
 };

 public barChartOptions2: ChartConfiguration<'bar'>['options'] = {
  responsive: false,
};
 

//bar chart
public barChartLegend4 = true;
public barChartPlugins4 = [];

public barChartData4: ChartConfiguration<'bar'>['data'] = {
  labels: [ 'ABN Amro', 'Walgreens', 'GE', 'AC Nielsen' ],
  datasets: [
    { data: [ 10, 23, 18, 16], label: 'AI', stack: 'a' },
    { data: [ 50, 49, 37, 54], label: 'Azure Vault' , stack: 'a'},
    { data: [ 50, 49, 37, 54], label: 'Database' , stack: 'a'},
    { data: [ 50, 49, 37, 54], label: 'Compute Storage' , stack: 'a'}
    
    
  ]
};

public barChartOptions4: ChartConfiguration<'bar'>['options'] = {
 responsive: false,
};

//bar chart
public barChartLegend5 = true;
public barChartPlugins5 = [];

public barChartData5: ChartConfiguration<'bar'>['data'] = {
  labels: [ 'MySQL', 'PostgreSQL', 'MSSQL', 'AzureSQL' ],
  datasets: [
    { data: [ 10, 23, 18, 16],  stack: 'a'},
    { data: [ 50, 49, 37, 54],  stack: 'a'},
    { data: [ 50, 49, 37, 54],  stack: 'a'},
    { data: [ 50, 49, 37, 54],  stack: 'a'}
    
    
  ]
};

public barChartOptions5: ChartConfiguration<'bar'>['options'] = {
 responsive: false,
};

//bar chart
public barChartLegend6 = true;
public barChartPlugins6 = [];

public barChartData6: ChartConfiguration<'bar'>['data'] = {
  labels: [ 'BFSI', 'Manufacturing', 'TTH', 'Retail' ],
  datasets: [
    { data: [ 10, 23, 18, 16], label: 'MySQL', stack: 'a' },
    { data: [ 50, 49, 37, 54], label: 'PostgreSQL' , stack: 'a'},
    { data: [ 50, 49, 37, 54], label: 'MySQL' , stack: 'a'},
    { data: [ 50, 49, 37, 54], label: 'Azure SQL' , stack: 'a'}
    
    
  ]
};

public barChartOptions6: ChartConfiguration<'bar'>['options'] = {
 responsive: false,
};

//bar chart
public barChartLegend7 = true;
public barChartPlugins7 = [];

public barChartData7: ChartConfiguration<'bar'>['data'] = {
  labels: [ 'ABN Amro', 'Walgreens', 'GE', 'AC Nielsen' ],
  datasets: [
    { data: [ 10, 23, 18, 16], label: 'MySQL', stack: 'a' },
    { data: [ 50, 49, 37, 54], label: 'PostgreSQL' , stack: 'a'},
    { data: [ 50, 49, 37, 54], label: 'MySQL' , stack: 'a'},
    { data: [ 50, 49, 37, 54], label: 'Azure SQL' , stack: 'a'}
    
    
  ]
};

public barChartOptions7: ChartConfiguration<'bar'>['options'] = {
 responsive: false,
};



  constructor() { }

  ngOnInit(): void {
  }
  
}


