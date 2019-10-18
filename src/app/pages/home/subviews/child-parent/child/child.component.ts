import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  inputs:['data1'],//方式二:接收父组件传递的数据参
  outputs:['dataToParent']//方式二:子组件向父组件传递数据
})
export class ChildComponent implements OnInit {

  @Input() data:any;//方式一:子组件接收父组件的数据
  data1:any;//方式二:子组件接收父组件的数据
  
  // @Output() dataToParent = new EventEmitter();//方式一:子组件向父组件传递数据;
  dataToParent = new EventEmitter();//方式一:子组件向父组件传递数据;

  constructor() { }

  ngOnInit() {
    
  }
  sendData(){
    this.dataToParent.emit({
      data:'我是子组件向父组件传递的数据'
    })
  }

}
