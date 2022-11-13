import { Component } from "@angular/core";
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import {GeneralserviceService} from "./generalservice.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "black-dashboard-angular";

  constructor(private service:GeneralserviceService ) { }
  


  getdata(){
    this.service.getdatafromdbforcluster();
  }
}
