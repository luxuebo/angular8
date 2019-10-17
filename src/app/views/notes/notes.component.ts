import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(public activeRoute: ActivatedRoute, public route: Router) { }

  ngOnInit() {

  }
  getRouterParams() {
    this.activeRoute.queryParams.subscribe((data) => {
      console.log('routerLink方式路由跳转,get方式参数')
      console.log(data)
    })
  }
  routerJump() {
    /*1.js控制路由跳转,并传递参数(get方式参数)*/
    let navigationExtras: NavigationExtras = {
      queryParams: { 'id': '21' },
      // fragment: 'anchor'
    };
    this.route.navigate(['/notes/routejump'], navigationExtras)
    /* 2.js控制路由跳转,并传递参数(动态路由参数)*/
    // this.route.navigate(['/notes/routejump/', 21]);
  }


}
