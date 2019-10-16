import { Component, OnInit, ViewChildren } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroService } from '../../services/hero.service'
//方式一:使用服务
let service = new HeroService();

@Component({
  selector: 'app-homecontent',
  templateUrl: './homecontent.component.html',
  styleUrls: ['./homecontent.component.scss']
})
export class HomeContentComponent implements OnInit {
  public title: string = '首页';
  public flag: boolean = true;
  public color: string = 'blue';
  public list: any[] = ['第一项', '第二项', true, 100, new Date()]
  public binding: any = '';
  @ViewChildren('vbox') vbox: any;
  constructor(private heroService: HeroService, public http: HttpClient) {
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    //当 Angular 初始化完组件视图及其子视图之后调用。第一次 ngAfterContentChecked() 之后调用，只调用一次.
    //在这个生命周期函数里可以访问dom
    // console.log('ngAfterViewInit')
    // console.log(this.vbox.first.nativeElement)
    // console.log(this)
  }

  click(e) {
    console.log(e)
  }
  getService() {
    //使用服务
    service.get('方式一:使用服务(不推荐)');
    this.heroService.get('方式二:使用服务(推荐)');
  }
  agget() {
    let api = "http://localhost:8080/news";
    this.http.get(api).subscribe((response: any) => {
      console.log(response);
    })
  }
  agpost() {
    //手动设置请求的类型
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    //存在跨域,后端解决   
    let api = 'http://localhost:8080/dologin';

    this.http.post(api, { "username": "张三", 'age': 20 }, httpOptions).subscribe((response) => {

      console.log(response);

    })

  }
  agjsonp() {
    let api="http://localhost:8080/order";

    this.http.jsonp(api,'cb').subscribe((response)=>{
      console.log(response);
    })

  }
  axiosget() {

  }
  axiospost() {

  }



}
