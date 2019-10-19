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
    path:'ngmodel',
    title:'双向数据绑定'
  },{
    path:'templateVariable',
    title:'模板临时变量'
  },{
    path:'form',
    title:'表单'
  },{
    path:'childParent',
    title:'子父组件通信'
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
    path:'pipe',
    title:'管道'
  },{
    path:'routerjump',
    title:'路由跳转及路由传参'
  },{
    path:'http',
    title:'网络请求'
  }]
  constructor() { }

  ngOnInit() {
  }

}
