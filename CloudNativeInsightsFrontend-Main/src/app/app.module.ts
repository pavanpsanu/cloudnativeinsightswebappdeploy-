import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { TestComponent } from './test/test.component';
// import { Cluster2Component } from './pages/customer/cluster2/cluster2.component';
// import { Cluster3Component } from './pages/customer/cluster3/cluster3.component';
// import { Cluster4Component } from './pages/customer/cluster4/cluster4.component';
// import { Cluster5Component } from './pages/customer/cluster5/cluster5.component';
// import { Cluster1Component } from './pages/customer/cluster1/cluster1.component';
import { ClusternavbarComponent } from './pages/customer/clusternavbar/clusternavbar.component';






@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, TestComponent, ClusternavbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
