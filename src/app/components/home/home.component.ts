import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: string = '首页';
  public flag: boolean = true;
  public color: string = 'blue';
  public list: any[] = ['第一项', '第二项', true, 100, new Date()]
  public binding: any = '';

  constructor() { }

  ngOnInit() {
  }
  click(e) {
    console.log(e)
  }

}
