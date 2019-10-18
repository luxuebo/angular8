import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-link-dynamic',
  templateUrl: './link-dynamic.component.html',
  styleUrls: ['./link-dynamic.component.scss']
})
export class LinkDynamicComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    //接收link 动态路由方式传递的值
    this.route.params.subscribe((params: any) => {
      console.log(`routerLink 动态路由方式路由跳转时的参数`)
      console.log(params)
    })
  }

}
