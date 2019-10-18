import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  public dataToChild:any = '我是父组件向子组件传递数据';
  public dataToChild1:any = '我是父组件向子组件传递数据1';
  public receiveData;
  constructor() { }

  ngOnInit() {
  }
  dataToParent(e){
    this.receiveData = e.data;//接收子组件传递的数据,并保存
  }

}
