import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-router-jump',
  templateUrl: './router-jump.component.html',
  styleUrls: ['./router-jump.component.scss']
})
export class RouterJumpComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  jsRouterJumpGet() {
    //js控制路由跳转,get方式传参
    let navigationExtras:NavigationExtras = {
      queryParams: { 'id': 3 },
      // fragment: 'anchor'
    };
    this.router.navigate(['/home/routerjump/jsget'], navigationExtras);

  }
  jsRouterJumpDynamic() {
    //js控制路由跳转,动态路由方式
    this.router.navigate(['/home/routerjump/jsdynamic',4]);

  }

}
