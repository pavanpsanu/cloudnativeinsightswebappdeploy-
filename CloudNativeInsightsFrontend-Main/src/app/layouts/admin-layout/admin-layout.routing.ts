import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { ServicesComponent } from "../../pages/services/services.component";
import {ReportComponent} from "../../pages/report/report.component";
import {CustomerComponent} from "../../pages/customer/customer.component";
import {Cluster1Component} from "../../pages/customer/cluster1/cluster1.component"
import {Cluster2Component} from "../../pages/customer/cluster2/cluster2.component"
import {Cluster3Component} from "../../pages/customer/cluster3/cluster3.component"
import {Cluster4Component} from "../../pages/customer/cluster4/cluster4.component"
import {Cluster5Component} from "../../pages/customer/cluster5/cluster5.component"
import { BusinessdashboardComponent } from '../../pages/dashboard/businessdashboard/businessdashboard.component';



export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "service", component: ServicesComponent },
  { path: "customer", component: CustomerComponent },
  { path: "report", component: ReportComponent },
  { path: "cluster1", component: Cluster1Component },
  { path: "cluster2", component: Cluster2Component },
  { path: "cluster3", component: Cluster3Component },
  { path: "cluster4", component: Cluster4Component },
  { path: "cluster5", component: Cluster5Component },
  { path: "businessdashboard", component: BusinessdashboardComponent }

  // { path: "user", component: UserComponent },
  // { path: "tables", component: TablesComponent },
  // { path: "typography", component: TypographyComponent },
  // { path: "services", component: ServicesComponent },
  // { path: "customer", component: CustomerComponent },
  // { path: "report", component: ReportComponent },
  // { path: "rtl", component: RtlComponent }
];
