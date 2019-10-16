import { Component, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {
  @ViewChildren('vbox') vbox: any;
  constructor() { }
  ngOnChanges() {
    //当 Angular（重新）设置数据绑定输入属性时响应。 该方法接受当前和上一属性值的 SimpleChanges 对象
    //在 ngOnInit() 之前以及所绑定的一个或多个输入属性的值发生变化时都会调用。
  }
  ngOnInit() {
    //在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件
    /*可以在这个钩子函数里面进行http请求*/
  }
  ngDoCheck() {
    //在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。
    //在第一轮 ngOnChanges() 完成之后调用，只调用一次。
  }
  ngAfterContentInit() {
    //当 Angular 把外部内容投影进组件/指令的视图之后调用。
    //第一次 ngDoCheck() 之后调用，只调用一次。
  }
  ngAfterContentChecked() {
    //每当 Angular 完成被投影组件内容的变更检测之后调用。
    //ngAfterContentInit() 和每次 ngDoCheck() 之后调用
  }

  ngAfterViewInit() {
    //当 Angular 初始化完组件视图及其子视图之后调用。第一次 ngAfterContentChecked() 之后调用，只调用一次.
    /*在这个生命周期函数里可以访问dom*/
    // 1.通过ViewChildren访问dom
    console.log(this.vbox.first.nativeElement)
    // 2.也可以直接用原生方法访问dom
  }
  ngAfterViewChecked() {
    //每当 Angular 做完组件视图和子视图的变更检测之后调用。
    //ngAfterViewInit() 和每次 ngAfterContentChecked() 之后调用。
  }
  ngOnDestroy() {
    //每当 Angular 每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。
    //在 Angular 销毁指令/组件之前调用。
  }

}
