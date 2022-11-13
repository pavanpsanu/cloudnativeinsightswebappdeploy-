import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { Chart } from 'chart.js';
@Component({
  selector: 'app-cluster4',
  templateUrl: './cluster4.component.html',
  styleUrls: ['./cluster4.component.scss']
})
export class Cluster4Component implements OnInit {

  active = 1;

  public barChartLegend3 = true;
  public barChartPlugins3 = [];
 
  public barChartData3: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Customer 1', 'Customer 2', 'Customer 3', 'Customer 4','Customer 5' ],
    datasets: [
      { data: [ 200, 150, 100 ,90, 80], stack: 'a' },
      // { data: [ 50, 49, 37, 54,50, 49, 37, 54,50, 49, 37, 54],  stack: 'a'},
      // { data: [ 50, 49, 37, 54,50, 49, 37, 54,50, 49, 37, 54],  stack: 'a'}
      
      
    ]
  };


  public barChartOptions3: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

   //bar chart
 public barChartLegend2 = true;
 public barChartPlugins2 = [];

 public barChartData2: ChartConfiguration<'bar'>['data'] = {
   labels: [ 'Increase in Customer', 'Increase in Revenue', 'Improved Brand Value', 'Increase in Customer satisfaction' ],
   datasets: [
     { data: [ 50, 60, 65, 20], stack: 'a' },
    //  { data: [ 50, 49, 37, 54], label: 'Azure Vault' , stack: 'a'},
    //  { data: [ 50, 49, 37, 54], label: 'Database' , stack: 'a'},
    //  { data: [ 50, 49, 37, 54], label: 'Compute Storage' , stack: 'a'}
     
     
   ]
 };

 public barChartOptions2: ChartConfiguration<'bar'>['options'] = {
  responsive: false,
};
 

//bar chart
public barChartLegend4 = true;
public barChartPlugins4 = [];

public barChartData4: ChartConfiguration<'bar'>['data'] = {
  labels: [ 'Availiability', 'MTTD Improvements', 'MTTR Improvement' ],
  datasets: [
    { data: [ 100,50,20], stack: 'a' },
    // { data: [ 50, 49, 37, 54], label: 'Level 1' , stack: 'a'},
    // { data: [ 50, 49, 37, 54], label: 'Level 2' , stack: 'a'},
    // { data: [ 50, 49, 37, 54], label: 'Level 3' , stack: 'a'}
    
    
  ]
};

public barChartOptions4: ChartConfiguration<'bar'>['options'] = {
 responsive: false,
};

//bar chart
public barChartLegend5 = true;
public barChartPlugins5 = [];

public barChartData5: ChartConfiguration<'bar'>['data'] = {
  labels: [ 'MySQL', 'PostgreSQL', 'MSSQL', 'Azure SQL' ],
  datasets: [
    { data: [ 1, 20, 25, 50], stack: 'a' },
    // { data: [ 50, 49, 37, 54], label: 'Level 1' , stack: 'a'},
    // { data: [ 50, 49, 37, 54], label: 'Level 2' , stack: 'a'},
    // { data: [ 50, 49, 37, 54], label: 'Level 3' , stack: 'a'}
    
    
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
    { data: [ 10, 23, 18, 16],  label: 'MySQL', stack: 'a' },
    { data: [ 50, 49, 37, 54],  label: 'PostgreSQL', stack: 'a'},
    { data: [ 50, 49, 37, 54],  label: 'MS SQL', stack: 'a'},
    { data: [ 50, 49, 37, 54],  label: 'Azure SQL', stack: 'a'}
    
    
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

//bar chart
public barChartLegend8 = true;
public barChartPlugins8 = [];

public barChartData8: ChartConfiguration<'bar'>['data'] = {
 labels: [ 'ABN Amro', 'Walgreens', 'GE', 'AC Nielsen' ],
  datasets: [
    { data: [ 10, 23, 18, 16], label: 'MySQL', stack: 'a' },
    { data: [ 50, 49, 37, 54], label: 'PostgreSQL' , stack: 'a'},
    { data: [ 50, 49, 37, 54], label: 'MySQL' , stack: 'a'},
    { data: [ 50, 49, 37, 54], label: 'Azure SQL' , stack: 'a'}
    
    
  ]
};

public barChartOptions8: ChartConfiguration<'bar'>['options'] = {
 responsive: false,
};

//bar chart
public barChartLegend9 = true;
public barChartPlugins9 = [];

public barChartData9: ChartConfiguration<'bar'>['data'] = {
 labels: [ 'ABN Amro', 'Walgreens', 'GE', 'AC Nielsen' ],
  datasets: [
    { data: [ 10, 23, 18, 16], label: 'MySQL', stack: 'a' },
    { data: [ 50, 49, 37, 54], label: 'PostgreSQL' , stack: 'a'},
    { data: [ 50, 49, 37, 54], label: 'MySQL' , stack: 'a'},
    { data: [ 50, 49, 37, 54], label: 'Azure SQL' , stack: 'a'}
    
    
  ]
};

public barChartOptions9: ChartConfiguration<'bar'>['options'] = {
 responsive: false,
};

//bar chart
public barChartLegend10 = true;
public barChartPlugins10 = [];

public barChartData10: ChartConfiguration<'bar'>['data'] = {
 labels: [ 'BFSI', 'Manufacturing', 'TTH', 'Retail' ],
  datasets: [
    { data: [ 10, 23, 18, 16], label: 'MySQL', stack: 'a' },
    { data: [ 50, 49, 37, 54], label: 'PostgreSQL' , stack: 'a'},
    { data: [ 50, 49, 37, 54], label: 'MS SQL' , stack: 'a'},
    { data: [ 50, 49, 37, 54], label: 'Azure SQL' , stack: 'a'}
    
    
  ]
};

public barChartOptions10: ChartConfiguration<'bar'>['options'] = {
 responsive: false,

};
//bar chart
public barChartLegend11 = true;
public barChartPlugins11 = [];

public barChartData11: ChartConfiguration<'bar'>['data'] = {
 labels: [ 'ABN Amro', 'Walgreens', 'GE', 'AC Nielsen' ],
  datasets: [
    { data: [ 10, 23, 18, 16], label: 'MySQL', stack: 'a' },
    { data: [ 50, 49, 37, 54], label: 'PostgreSQL' , stack: 'a'},
    { data: [ 50, 49, 37, 54], label: 'MySQL' , stack: 'a'},
    { data: [ 50, 49, 37, 54], label: 'Azure SQL' , stack: 'a'}
    
    
  ]
};

public barChartOptions11: ChartConfiguration<'bar'>['options'] = {
 responsive: false,
};

  constructor() { }

  ngOnInit(): void {
  }

}