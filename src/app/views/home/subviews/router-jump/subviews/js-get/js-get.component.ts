import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-js-get',
  templateUrl: './js-get.component.html',
  styleUrls: ['./js-get.component.scss']
})
export class JsGetComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    //接收link get方式传递的值
    this.route.queryParams.subscribe((params: any) => {
      console.log(`js get方式路由跳转时的参数`)
      console.log(params)
    })
  }

}
