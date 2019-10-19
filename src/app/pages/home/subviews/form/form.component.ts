import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';//Validators表单验证器函数
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  info = new FormGroup({
    username: new FormControl('',Validators.required),//Validators.required 也可以放在表单标签上，支持h5表单原生属性
    password: new FormControl('',Validators.required),
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    /*
    info的属性及方法
    1.value:表单内容
    2.valid:true，通过校验
    3.invalid:true,不通过校验
    4.pristine：true，从未输入过
    5.dirty：true，输入过
    6.controls：子表单
    */
   if(this.info.valid){
    console.log(this.info.value)

   }else{
     alert('请输入')
   }

  }

}
