import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public asideTitle:any[]=[{
    path:'directive',
    title:'指令'
  },{
    path:'event',
    title:'事件'
  },{
    path:'service',
    title:'服务'
  },{
    path:'lifecycle',
    title:'生命周期'
  },{
    path:'ajax',
    title:'网络请求'
  }]
  constructor() { }

  ngOnInit() {
  }

}
