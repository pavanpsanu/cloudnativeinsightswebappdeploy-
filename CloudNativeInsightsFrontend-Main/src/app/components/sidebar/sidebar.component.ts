import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/service",
    title: "Service",
    rtlTitle: "لوحة القيادة",
    icon: "icon-settings-gear-63",
    class: ""
  },
  {
    path: "/customer",
    title: "Customer",
    rtlTitle: "لوحة القيادة",
    icon: "icon-badge",
    class: ""
  },
  {
    path: "/report",
    title: "Report",
    rtlTitle: "لوحة القيادة",
    icon: "icon-book-bookmark",
    class: ""
  },

  
 
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
