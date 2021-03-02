import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() isCollapsed: boolean = false;
  sideMenu = [
    {
      title: 'Home',
      icon: 'home',
      url: '/dashboard'
      // submenu: [
      //   {
      //     title: 'Dashboard',
      //     url: '/dashboard'
      //   }
      // ]
    },
    {
      title: 'Product',
      icon: 'shopping',
      url: '/products'
      // submenu:[
      //   {
      //     title: 'Category List',
      //     url: '/products/category'
      //   },
      //   {
      //     title: 'Add A New Product',
      //     url: '/products/create'
      //   },
      //   {
      //     title: 'Product List',
      //     url: '/products'
      //   }
      // ]
    },
    {
      title: 'Order',
      icon: 'account-book',
      url: '/orders'
    },
    {
      title: 'Blog',
      icon: 'book',
      url: '/posts'
    },
    {
      title: 'Client',
      icon: 'team',
      url: '/clients'
    },
    {
      title: 'Inquiry',
      icon: 'message',
      url: '/inquiries'
    },
    {
      title: 'Analysis',
      icon: 'bar-chart',
      url: '/analysis'
    },
    {
      title: 'Setting',
      icon: 'setting',
      url: '/setting'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
