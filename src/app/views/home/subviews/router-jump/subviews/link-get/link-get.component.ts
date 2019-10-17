import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-link-get',
  templateUrl: './link-get.component.html',
  styleUrls: ['./link-get.component.scss']
})
export class LinkGetComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    //接收link get方式传递的值
    this.route.queryParams.subscribe((params: any) => {
      console.log(`routerLink get方式路由跳转时的参数`)
      console.log(params)
    })
  }

}
