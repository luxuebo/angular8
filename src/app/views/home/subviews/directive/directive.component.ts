import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
  public title: string = '指令';
  public flag: boolean = true;
  public color: string = 'blue';
  public list: any[] = ['第一项', '第二项', true, 100, new Date()]
  public binding: any = '';
  fontcolor:string = 'blue';
  constructor() { }

  ngOnInit() {
  }

}
