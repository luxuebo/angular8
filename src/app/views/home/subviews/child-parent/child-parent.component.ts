import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.scss']
})
export class ChildParentComponent implements OnInit {
  public title: any = '父组件向子组件传递的参数'
  constructor() { }

  ngOnInit() {
  }

}
