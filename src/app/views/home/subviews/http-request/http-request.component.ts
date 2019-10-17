import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/*使用第三方模块axios进行http请求*/
import { HttpRequestService } from '../../../../services/api/http-request.service';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.scss']
})
export class HttpRequestComponent implements OnInit {

  constructor( public http: HttpClient,public httpService:HttpRequestService) { }

  ngOnInit() {
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
    let api = "http://localhost:8080/order";
    this.http.jsonp(api, 'cb').subscribe((response) => {
      console.log(response);
    })
  }
  axiosget() {
    console.log('axios get请求')
    this.httpService.axiosGet('/news').then((data)=>{
        console.log(data)
    })

  }
  
  axiospost() {
    console.log('axios post请求')
    this.httpService.axiosPost('/dologin',{
      name:'李四',
      age:'21'
    }).then((data)=>{
        console.log(data)
    })
  }

}
