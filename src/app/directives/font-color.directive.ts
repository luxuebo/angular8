/*组件也是一种指令,在标签上绑定指令,相当于在父组件中使用子组件,因此,指令和组件的通信和组件与组件的通信是一样的 */
import { Directive,Input,ElementRef } from '@angular/core';//ElementRef服务, 获取绑定该指令的dom

@Directive({
  selector: '[appFontColor]'//指令名称appFontColor
})
export class FontColorDirective {
  @Input() appFontColor:string;
  constructor(public el:ElementRef) { 
   
  }
  ngOnChanges(){
    if(this.appFontColor){
      this.el.nativeElement.style.color = this.appFontColor
    }else{
      this.el.nativeElement.style.color = 'red';
    }
  }

}
