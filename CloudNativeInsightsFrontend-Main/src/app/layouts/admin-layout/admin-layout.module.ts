import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { ServicesComponent } from '../../pages/services/services.component';
import { CustomerComponent } from '../../pages/customer/customer.component';
import { ReportComponent } from '../../pages/report/report.component';
import {Cluster1Component} from "../../pages/customer/cluster1/cluster1.component"
import {Cluster2Component} from "../../pages/customer/cluster2/cluster2.component"
import {Cluster3Component} from "../../pages/customer/cluster3/cluster3.component"
import {Cluster4Component} from "../../pages/customer/cluster4/cluster4.component"
import {Cluster5Component} from "../../pages/customer/cluster5/cluster5.component"
import { BusinessdashboardComponent } from '../../pages/dashboard/businessdashboard/businessdashboard.component';





// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { NgChartsModule } from 'ng2-charts';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    ServicesComponent,
    CustomerComponent,
    ReportComponent,
    Cluster1Component,
    Cluster2Component,
    Cluster3Component,
    Cluster4Component,
    Cluster5Component,
    BusinessdashboardComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
