import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-js-dynamic',
  templateUrl: './js-dynamic.component.html',
  styleUrls: ['./js-dynamic.component.scss']
})
export class JsDynamicComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    //接收js控制路由 动态路由方式传递的值
    this.route.params.subscribe((params: any) => {
      console.log(`js控制路由跳转 动态路由时的参数`)
      console.log(params)
    })
  }

}
