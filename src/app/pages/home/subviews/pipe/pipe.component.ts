import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  currentDate:Date = new Date();
  str:string = 'pipe';
  str1:string = 'PIPE';
  obj:object = {
    name:'云长',
    age:'23'
  };
  num1:number = 123456.76543;
  num:number = 0.123456;
  hump:string = 'user_name-pass-Word';
  constructor() { }

  ngOnInit() {
  }

}
